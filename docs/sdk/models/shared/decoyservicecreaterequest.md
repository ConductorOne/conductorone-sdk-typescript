# DecoyServiceCreateRequest

The DecoyServiceCreateRequest message.

This message contains a oneof named create_input. Only a single field of the following list may be set at a time:
  - userClientCredential
  - connectorClient
  - workloadFed
  - accessToken


## Example Usage

```typescript
import { DecoyServiceCreateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DecoyServiceCreateRequest = {};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `accessToken`                                                                                         | [shared.DecoyAccessTokenInput](../../../sdk/models/shared/decoyaccesstokeninput.md)                   | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `annotations`                                                                                         | Record<string, *string*>                                                                              | :heavy_minus_sign:                                                                                    | The annotations field.                                                                                |
| `connectorClient`                                                                                     | [shared.DecoyConnectorClientInput](../../../sdk/models/shared/decoyconnectorclientinput.md)           | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `description`                                                                                         | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The description field.                                                                                |
| `displayName`                                                                                         | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The displayName field.                                                                                |
| `userClientCredential`                                                                                | [shared.DecoyUserClientCredentialInput](../../../sdk/models/shared/decoyuserclientcredentialinput.md) | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `workloadFed`                                                                                         | [shared.DecoyWorkloadFederationInput](../../../sdk/models/shared/decoyworkloadfederationinput.md)     | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |