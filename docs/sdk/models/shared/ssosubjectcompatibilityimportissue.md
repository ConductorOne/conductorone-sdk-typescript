# SSOSubjectCompatibilityImportIssue

SSOSubjectCompatibilityImportIssue describes one CSV row that cannot be
 imported.

## Example Usage

```typescript
import { SSOSubjectCompatibilityImportIssue } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SSOSubjectCompatibilityImportIssue = {};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `reason`                                            | *string*                                            | :heavy_minus_sign:                                  | Human-readable reason this row cannot be imported.  |
| `row`                                               | *number*                                            | :heavy_minus_sign:                                  | One-based CSV row number, including the header row. |
| `subject`                                           | *string*                                            | :heavy_minus_sign:                                  | Legacy subject supplied by the batch entry.         |
| `userId`                                            | *string*                                            | :heavy_minus_sign:                                  | ConductorOne user ID supplied by the batch entry.   |