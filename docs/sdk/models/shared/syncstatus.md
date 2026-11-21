# SyncStatus

Current connector sync status.

## Example Usage

```typescript
import { SyncStatus } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SyncStatus = "SYNC_STATUS_DONE";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"SYNC_STATUS_UNSPECIFIED" | "SYNC_STATUS_RUNNING" | "SYNC_STATUS_DONE" | "SYNC_STATUS_ERROR" | "SYNC_STATUS_DISABLED" | Unrecognized<string>
```