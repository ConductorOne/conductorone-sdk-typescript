# ConnectorStatusStatus

The status of the connector sync.

## Example Usage

```typescript
import { ConnectorStatusStatus } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ConnectorStatusStatus = "SYNC_STATUS_RUNNING";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"SYNC_STATUS_UNSPECIFIED" | "SYNC_STATUS_RUNNING" | "SYNC_STATUS_DONE" | "SYNC_STATUS_ERROR" | "SYNC_STATUS_DISABLED" | Unrecognized<string>
```