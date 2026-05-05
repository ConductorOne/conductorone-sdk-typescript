# RoleMiningManagementRunStatus

Current execution status of this run (e.g., running, completed, failed).

## Example Usage

```typescript
import { RoleMiningManagementRunStatus } from "conductorone-sdk-typescript/sdk/models/shared";

let value: RoleMiningManagementRunStatus = "RUN_STATUS_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"RUN_STATUS_UNSPECIFIED" | "RUN_STATUS_RUNNING" | "RUN_STATUS_COMPLETED" | "RUN_STATUS_FAILED" | Unrecognized<string>
```