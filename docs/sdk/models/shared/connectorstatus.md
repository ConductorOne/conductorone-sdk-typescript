# ConnectorStatus

The status field on the connector is used to track the status of the connectors sync, and when syncing last started, completed, or caused the connector to update.

## Example Usage

```typescript
import { ConnectorStatus } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ConnectorStatus = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `completedAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `lastError`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The last error encountered by the connector.                                                  |
| `startedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [shared.ConnectorStatusStatus](../../../sdk/models/shared/connectorstatusstatus.md)           | :heavy_minus_sign:                                                                            | The status of the connector sync.                                                             |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |