# AppPopulationReportState

The state field tracks the state of the AppPopulationReport. This state field can be one of REPORT_STATE_PENDING, REPORT_STATE_UNSPECIFIED, REPORT_STATE_OK, REPORT_STATE_ERROR.

## Example Usage

```typescript
import { AppPopulationReportState } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppPopulationReportState = "REPORT_STATE_OK";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"REPORT_STATE_UNSPECIFIED" | "REPORT_STATE_PENDING" | "REPORT_STATE_OK" | "REPORT_STATE_ERROR" | Unrecognized<string>
```