# CustomAnalysisResultViewStatus

Execution status of this analysis (e.g., running, completed, failed).

## Example Usage

```typescript
import { CustomAnalysisResultViewStatus } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CustomAnalysisResultViewStatus = "RUN_STATUS_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"RUN_STATUS_UNSPECIFIED" | "RUN_STATUS_RUNNING" | "RUN_STATUS_COMPLETED" | "RUN_STATUS_FAILED" | Unrecognized<string>
```