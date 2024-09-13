# ForceSyncRequest

Signal the connector to start syncing. This puts the sync on the queue. It does not guarantee immediate sync. Long syncs still take minutes to hours.

## Example Usage

```typescript
import { ForceSyncRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ForceSyncRequest = {};
```

## Fields

| Field       | Type        | Required    | Description |
| ----------- | ----------- | ----------- | ----------- |