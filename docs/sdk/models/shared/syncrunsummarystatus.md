# SyncRunSummaryStatus

Recorded lifecycle state.

## Example Usage

```typescript
import { SyncRunSummaryStatus } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SyncRunSummaryStatus = "SYNC_LIFECYCLE_STATUS_ERRORED_NO_DATA";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"SYNC_LIFECYCLE_STATUS_UNSPECIFIED" | "SYNC_LIFECYCLE_STATUS_SYNCING" | "SYNC_LIFECYCLE_STATUS_ERRORED" | "SYNC_LIFECYCLE_STATUS_COMPLETED" | "SYNC_LIFECYCLE_STATUS_NOT_CONNECTED" | "SYNC_LIFECYCLE_STATUS_SKIPPED" | "SYNC_LIFECYCLE_STATUS_ERRORED_NO_DATA" | Unrecognized<string>
```