# ConnectorAction

The ConnectorAction message.

This message contains a oneof named connector_identifier. Only a single field of the following list may be set at a time:
  - connectorRef


## Example Usage

```typescript
import { ConnectorAction } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ConnectorAction = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `actionName`                                                      | *string*                                                          | :heavy_minus_sign:                                                | The actionName field.                                             |
| `argsTemplate`                                                    | Record<string, *any*>                                             | :heavy_minus_sign:                                                | N/A                                                               |
| `connectorRef`                                                    | [shared.ConnectorRef](../../../sdk/models/shared/connectorref.md) | :heavy_minus_sign:                                                | N/A                                                               |