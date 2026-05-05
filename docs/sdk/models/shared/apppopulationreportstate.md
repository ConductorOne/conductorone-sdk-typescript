# AppPopulationReportState

The state field tracks the state of the AppPopulationReport. This state field can be one of REPORT_STATE_PENDING, REPORT_STATE_UNSPECIFIED, REPORT_STATE_OK, REPORT_STATE_ERROR.

## Example Usage

```typescript
import { AppPopulationReportState } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppPopulationReportState = "REPORT_STATE_OK";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"REPORT_STATE_UNSPECIFIED" | "REPORT_STATE_PENDING" | "REPORT_STATE_OK" | "REPORT_STATE_ERROR" | Unrecognized<string>
```