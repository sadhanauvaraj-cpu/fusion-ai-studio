# Workflow Test Result: primary-path

**Status:** PASSED
**Workflow:** XX_FIN_GET_UNPOSTED_PBCS_BATCHES (DRAFT v85584538)
**Scenario:** sync-plan primary-path
**Test Intent:** Record representative environment data once, replay it from the test file, and verify the primary workflow path and final output.
**Data Source:** file
**Evaluation:** deterministic
**Workflow Time:** 46 ms (sum of node times)
**Test Run Time:** 1301 ms
**Test File:** `app-pkg/ora_fusion_ai_studio/tests/ai/self/oraFusionAiStudio/workflows/xx_fin_get_unposted_pbcs_batches/primary-path.json`
**JSON Report:** `C:\001DDrive\AI Agent CLI\fusion-ai-studio\app-pkg\ora_fusion_ai_studio\test-reports\workflows\xx_fin_get_unposted_pbcs_batches\primary-path\result.json`
**Markdown Report:** `C:\001DDrive\AI Agent CLI\fusion-ai-studio\app-pkg\ora_fusion_ai_studio\test-reports\workflows\xx_fin_get_unposted_pbcs_batches\primary-path\result.md`
**HTML Report:** `C:\001DDrive\AI Agent CLI\fusion-ai-studio\app-pkg\ora_fusion_ai_studio\test-reports\workflows\xx_fin_get_unposted_pbcs_batches\primary-path\result.html`

## Test Intent

**Type:** sync-plan primary-path
**Intent:** Record representative environment data once, replay it from the test file, and verify the primary workflow path and final output.

## Invocation

**Message:** (empty)
**Trigger Type:** rest
**Single Turn:** yes

```json
{}
```

## Final Output

```text
{"result":{"sourceName":"PBCS","postingStatusFilter":"Not Posted","count":0,"items":[],"pagesFetched":1,"hasMore":false,"message":"No non-posted PBCS journal batches were found."},"console":"","timedOut":false}
```

## Verification Summary

| Verification | Status | Result |
| --- | --- | --- |
| Path assertions | PASSED | 7/7 passed |
| Workflow run checks | PASSED | 1/1 passed |
| Output checks | PASSED | 1/1 passed |

## Path Assertions

| Status | Assertion | Requirement | Node Code | Observed or Failure |
| --- | --- | --- | --- | --- |
| PASS | INITIALIZE_PAGINATION executes | Must execute | INITIALIZE_PAGINATION | Executed |
| PASS | INITIALIZE_BATCH_STATE executes | Must execute | INITIALIZE_BATCH_STATE | Executed |
| PASS | FETCH_ALL_BATCH_PAGES executes | Must execute | FETCH_ALL_BATCH_PAGES | Executed |
| PASS | FETCH_PBCS_BATCH_PAGE executes | Must execute | FETCH_PBCS_BATCH_PAGE | Executed |
| PASS | COLLECT_BATCH_PAGE executes | Must execute | COLLECT_BATCH_PAGE | Executed |
| PASS | ADVANCE_BATCH_PAGE executes | Must execute | ADVANCE_BATCH_PAGE | Executed |
| PASS | RETURN_JOURNAL_BATCHES executes | Must execute | RETURN_JOURNAL_BATCHES | Executed |



## Workflow Run Checks

| Status | Assertion | Check | Expected | Observed or Failure |
| --- | --- | --- | --- | --- |
| PASS | Workflow completed without error | Workflow completed without error | Workflow execution must not finish with error. | Verified |

## Output Checks

| Status | Assertion | Check | Expected | Observed or Failure |
| --- | --- | --- | --- | --- |
| PASS | Final output produced | Final output produced | Workflow execution must produce a final answer. | Verified |



## Runtime Metrics

Workflow time: 46 ms (sum of node times)
Test run time: 1301 ms (includes CLI overhead)
Token usage: not emitted by runtime

Aggregate Token Usage

Token usage was not emitted by runtime events.

No per-node token usage was emitted by runtime events.


AI Units: no-token-data

| Node | Node Time (ms) | LLM Call Time (ms) | Details |
| --- | --- | --- | --- |
| FETCH_PBCS_BATCH_PAGE | 46 |  | 0 runtime details; see JSON report |

No optional token/model fields were emitted by runtime events.

## Test Data

Capture policy: record-now

| Node | Node Type | Capture Mode | Truncated | Items | Response Bytes |
| --- | --- | --- | --- | --- | --- |
| FETCH_PBCS_BATCH_PAGE | BO_FUNCTION | raw | no | 0 | 249 |

## Workflow Run

**Conversation ID:** workflow-test-primary-path-c4352f00-6486-47c8-b9fe-f5ceabc5f709
**Job ID:** 913e1eb9-346f-4299-a9db-a935810da46c
**Finish Reason:** stop
**Raw Event Count:** 12

| Node | Events | Input Captured | Output Captured |
| --- | --- | --- | --- |
| START | NODE_EXECUTED | yes | yes |
| INITIALIZE_PAGINATION | NODE_EXECUTED | yes | yes |
| INITIALIZE_BATCH_STATE | NODE_EXECUTED | yes | yes |
| FETCH_ALL_BATCH_PAGES | NODE_START, NODE_END | yes | yes |
| START_BATCH_PAGES | NODE_EXECUTED | yes | yes |
| FETCH_PBCS_BATCH_PAGE | NODE_START, NODE_END | yes | yes |
| COLLECT_BATCH_PAGE | NODE_EXECUTED | yes | yes |
| ADVANCE_BATCH_PAGE | NODE_EXECUTED | yes | yes |
| RETURN_JOURNAL_BATCHES | NODE_EXECUTED | yes | yes |


