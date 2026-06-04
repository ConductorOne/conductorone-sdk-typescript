# ConnectorActionEffect

The ConnectorActionEffect message.

## Example Usage

```typescript
import { ConnectorActionEffect } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ConnectorActionEffect = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `appEntitlementId`                                                | *string*                                                          | :heavy_minus_sign:                                                | The appEntitlementId field.                                       |
| `appId`                                                           | *string*                                                          | :heavy_minus_sign:                                                | The appId field.                                                  |
| `appUserId`                                                       | *string*                                                          | :heavy_minus_sign:                                                | The appUserId field.                                              |
| `connectorActionId`                                               | *string*                                                          | :heavy_minus_sign:                                                | The connectorActionId field.                                      |
| `connectorEntitlementId`                                          | *string*                                                          | :heavy_minus_sign:                                                | The connectorEntitlementId field.                                 |
| `connectorGrantId`                                                | *string*                                                          | :heavy_minus_sign:                                                | The connectorGrantId field.                                       |
| `connectorId`                                                     | *string*                                                          | :heavy_minus_sign:                                                | The connectorId field.                                            |
| `effectSource`                                                    | [shared.EffectSource](../../../sdk/models/shared/effectsource.md) | :heavy_minus_sign:                                                | The effectSource field.                                           |
| `effectType`                                                      | [shared.EffectType](../../../sdk/models/shared/effecttype.md)     | :heavy_minus_sign:                                                | The effectType field.                                             |
| `exclusionGroupId`                                                | *string*                                                          | :heavy_minus_sign:                                                | The exclusionGroupId field.                                       |
| `replacedConnectorGrantId`                                        | *string*                                                          | :heavy_minus_sign:                                                | The replacedConnectorGrantId field.                               |
| `unresolvedReason`                                                | *string*                                                          | :heavy_minus_sign:                                                | The unresolvedReason field.                                       |