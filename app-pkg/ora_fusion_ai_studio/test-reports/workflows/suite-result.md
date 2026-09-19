# Workflow Test Suite Result

**Status:** PASSED
**Data Source:** file
**Evaluation:** deterministic
**Started:** 2026-09-17T10:51:29.382Z
**Finished:** 2026-09-17T13:31:44.137Z
**Total:** 1
**Passed:** 1
**Failed:** 0
**Needs Judge:** 0
**Total Workflow Time:** 46 ms
**Token Data:** not emitted
**AI Units:** no-token-data (0/1 cases computed).
**JSON Report:** `C:\001DDrive\AI Agent CLI\fusion-ai-studio\app-pkg\ora_fusion_ai_studio\test-reports\workflows\suite-result.json`
**Markdown Report:** `C:\001DDrive\AI Agent CLI\fusion-ai-studio\app-pkg\ora_fusion_ai_studio\test-reports\workflows\suite-result.md`
**HTML Report:** `C:\001DDrive\AI Agent CLI\fusion-ai-studio\app-pkg\ora_fusion_ai_studio\test-reports\workflows\suite-result.html`

## Summary

Workflow test suite passed: 1/1 passed, 0 failed, 0 needs judge.

Reports:
- Workflow suite report: [suite-result.html](<C:\001DDrive\AI Agent CLI\fusion-ai-studio\app-pkg\ora_fusion_ai_studio\test-reports\workflows\suite-result.html>)

Metrics:
- Token data: not emitted for 1 cases.
- AI units: no-token-data (0/1 cases computed).
- Latency: total workflow time 46 ms across 1/1 cases.

Optimization:
- Model optimization sweep is not applicable for this suite. No matched workflow has LLM, AGENT, or model-configurable semantic-output nodes. There is no model placement to optimize.

Tests:
1. primary-path | passed | Record representative environment data once, replay it from the test file, and v...

## Detailed Cases

<details>
<summary>Show diagnostic case details</summary>

| Status | Workflow | Test | Purpose | Data | Evaluation | Deterministic | Judge | Test Data | Path | Duration | Workflow Time | Input Tokens | Output Tokens | Total Tokens | Model | AI Units | Warnings | Failure | Report |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PASSED | XX_FIN_GET_UNPOSTED_PBCS_BATCHES | primary-path | Retrieve all non-posted PBCS journal batches across all accounting periods and verify pagination and the final result. | file | deterministic | passed: 9/9 checks | skipped: evaluation-mode deterministic skips judge evaluation. | record-now: raw | executes INITIALIZE_PAGINATION, INITIALIZE_BATCH_STATE, FETCH_ALL_BATCH_PAGES, FETCH_PBCS_BATCH_PAGE, COLLECT_BATCH_PAGE, ADVANCE_BATCH_PAGE, RETURN_JOURNAL_BATCHES | 1301 ms | 46 ms |  |  |  |  | no-token-data |  |  | C:\001DDrive\AI Agent CLI\fusion-ai-studio\app-pkg\ora_fusion_ai_studio\test-reports\workflows\xx_fin_get_unposted_pbcs_batches\primary-path\result.html |

</details>
