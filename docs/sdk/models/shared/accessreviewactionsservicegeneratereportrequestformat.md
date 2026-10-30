# AccessReviewActionsServiceGenerateReportRequestFormat

Output format for the report. When unspecified, programmatic public-API
 callers (REST gateway and MCP) get JSON and the in-app UI gets XLSX. JSON
 and CSV return the per-decision certification rows; XLSX returns the full
 multi-sheet Excel workbook.

## Example Usage

```typescript
import { AccessReviewActionsServiceGenerateReportRequestFormat } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessReviewActionsServiceGenerateReportRequestFormat =
  "ACCESS_REVIEW_REPORT_FORMAT_CSV";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"ACCESS_REVIEW_REPORT_FORMAT_UNSPECIFIED" | "ACCESS_REVIEW_REPORT_FORMAT_XLSX" | "ACCESS_REVIEW_REPORT_FORMAT_JSON" | "ACCESS_REVIEW_REPORT_FORMAT_CSV" | Unrecognized<string>
```