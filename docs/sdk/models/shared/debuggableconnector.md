# DebuggableConnector

DebuggableConnector contains the minimal metadata needed to select a diagnostic target.

## Example Usage

```typescript
import { DebuggableConnector } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DebuggableConnector = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `appId`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Application containing the connector.                                                         |
| `authored`                                                                                    | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Whether this is a live tenant-authored installation.                                          |
| `catalogId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | Catalog entry associated with the connector.                                                  |
| `connectorId`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Connector to pass to diagnostic reads.                                                        |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Connector display name.                                                                       |
| `lastCompletedAt`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `syncStatus`                                                                                  | [shared.SyncStatus](../../../sdk/models/shared/syncstatus.md)                                 | :heavy_minus_sign:                                                                            | Current connector sync status.                                                                |