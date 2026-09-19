const fs = require('fs');
const file = 'app-pkg/ora_fusion_ai_studio/sources/ai/self/oraFusionAiStudio/workflows/xx_fin_get_unposted_pbcs_batches/xx_fin_get_unposted_pbcs_batches.wf';
const workflow = JSON.parse(fs.readFileSync(file, 'utf8'));
const pipeline = workflow.specification.dataPipeline;
const codes = ['FETCH_PBCS_BATCH_PAGE', 'COLLECT_BATCH_PAGE', 'ADVANCE_BATCH_PAGE'];
const body = codes.map(code => pipeline.pipelineNodes.find(node => node.code === code));
if (body.some(node => !node)) throw new Error('Missing pagination body node');
const loop = pipeline.pipelineNodes.find(node => node.code === 'FETCH_ALL_BATCH_PAGES');
const startId = 'start_' + loop.id;
const endId = 'end_' + loop.id;
body.forEach((node, index) => { node.outcomes = {success: index + 1 < body.length ? body[index + 1].id : endId}; });
loop.metadata.dataPipeline = {rootNode: startId, pipelineNodes: [
  {id: startId, code: 'START_BATCH_PAGES', type: 'START', metadata: {name: 'Start Batch Page'}, inputs: [], outcomes: {success: body[0].id}},
  ...body,
  {id: endId, code: 'END_BATCH_PAGES', type: 'END', metadata: {name: 'End Batch Page'}, inputs: [], outcomes: {}}
]};
pipeline.pipelineNodes = pipeline.pipelineNodes.filter(node => !codes.includes(node.code));
pipeline.variables = [{id: 'var_batch_state', name: 'batchState', type: 'object', scope: 'JOB', typeSpecification: JSON.stringify({type:'object', properties:{offset:{type:'number'},hasMore:{type:'boolean'},items:{type:'array',items:{type:'object'}},pages:{type:'number'}},required:['offset','hasMore','items','pages']})}];
for (const node of [...pipeline.pipelineNodes, ...body]) if (node.type === 'SET_FIELDS') node.inputs = node.inputs.map(({id,name,value}) => ({id,name,value}));
fs.writeFileSync(file, JSON.stringify(workflow, null, 2) + '\n');
