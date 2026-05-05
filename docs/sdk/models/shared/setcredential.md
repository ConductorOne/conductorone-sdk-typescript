# SetCredential

SetCredential submits a RotateCredentials baton task to the target connector,
 re-encrypting the given password CEL expression with the connector's public JWK.

This message contains a oneof named connector_identifier. Only a single field of the following list may be set at a time:
  - connectorRef


## Example Usage

```typescript
import { SetCredential } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SetCredential = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `accountIdCel`                                                    | *string*                                                          | :heavy_minus_sign:                                                | The accountIdCel field.                                           |
| `connectorRef`                                                    | [shared.ConnectorRef](../../../sdk/models/shared/connectorref.md) | :heavy_minus_sign:                                                | The ConnectorRef message.                                         |
| `passwordCel`                                                     | *string*                                                          | :heavy_minus_sign:                                                | The passwordCel field.                                            |