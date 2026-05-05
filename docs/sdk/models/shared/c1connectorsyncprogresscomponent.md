# C1ConnectorSyncProgressComponent

C1ConnectorSyncProgressComponent renders a live connector sync status card.
 Subscribes to WebSocket updates for real-time sync lifecycle status.

## Example Usage

```typescript
import { C1ConnectorSyncProgressComponent } from "conductorone-sdk-typescript/sdk/models/shared";

let value: C1ConnectorSyncProgressComponent = {};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `appId`                | *string*               | :heavy_minus_sign:     | The appId field.       |
| `connectorId`          | *string*               | :heavy_minus_sign:     | The connectorId field. |
| `title`                | *string*               | :heavy_minus_sign:     | The title field.       |