# C1ConnectorSyncDetailComponent

C1ConnectorSyncDetailComponent renders the same live card as
 C1ConnectorSyncProgressComponent but pre-expanded with the phase checklist,
 live count tiles, and "What's happening" explainer visible from the first
 paint. Intended for message-body placement — emit one after each
 `submit_app_config` so the transcript carries a clear "this is what just
 happened" receipt for the connector the user just connected.

## Example Usage

```typescript
import { C1ConnectorSyncDetailComponent } from "conductorone-sdk-typescript/sdk/models/shared";

let value: C1ConnectorSyncDetailComponent = {};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `appId`                | *string*               | :heavy_minus_sign:     | The appId field.       |
| `connectorId`          | *string*               | :heavy_minus_sign:     | The connectorId field. |
| `title`                | *string*               | :heavy_minus_sign:     | The title field.       |