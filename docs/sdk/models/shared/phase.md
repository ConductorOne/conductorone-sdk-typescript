# Phase

Durable execution progress and milestone timestamps. Pending refreshes
 expose their current phase; terminal runs retain timings for analysis.

## Example Usage

```typescript
import { Phase } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Phase = "REPORT_RUN_PHASE_PREPARING_SCRATCH";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"REPORT_RUN_PHASE_UNSPECIFIED" | "REPORT_RUN_PHASE_REQUESTED" | "REPORT_RUN_PHASE_PREPARING_SCRATCH" | "REPORT_RUN_PHASE_RUNNING_FUNCTION" | "REPORT_RUN_PHASE_FINALIZING_OUTPUT" | "REPORT_RUN_PHASE_SUCCEEDED" | "REPORT_RUN_PHASE_FAILED" | Unrecognized<string>
```