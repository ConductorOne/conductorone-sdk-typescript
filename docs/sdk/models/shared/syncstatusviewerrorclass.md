# SyncStatusViewErrorClass

Classification of the current error.

## Example Usage

```typescript
import { SyncStatusViewErrorClass } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SyncStatusViewErrorClass = "SYNC_ERROR_CLASS_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"SYNC_ERROR_CLASS_UNSPECIFIED" | "SYNC_ERROR_CLASS_AUTH_OR_SCOPE" | "SYNC_ERROR_CLASS_RATE_LIMIT" | "SYNC_ERROR_CLASS_TIMEOUT" | "SYNC_ERROR_CLASS_UPSTREAM_CONSISTENCY" | "SYNC_ERROR_CLASS_CONNECTOR_BUG" | "SYNC_ERROR_CLASS_STORAGE" | "SYNC_ERROR_CLASS_DATA_ANOMALY" | "SYNC_ERROR_CLASS_RUNTIME_REFUSED" | "SYNC_ERROR_CLASS_DEPLOYMENT" | "SYNC_ERROR_CLASS_UNKNOWN" | Unrecognized<string>
```