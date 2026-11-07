# APIKeyRef

APIKeyRef identifies an API key, or another credential that makes API requests.

This message contains a oneof named credential. Only a single field of the following list may be set at a time:
  - personalClient
  - deviceClient
  - servicePrincipalCredential
  - connectedAppClientGrant
  - connectedAppOauthGrant
  - systemClient


## Example Usage

```typescript
import { APIKeyRef } from "conductorone-sdk-typescript/sdk/models/shared";

let value: APIKeyRef = {};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `connectedAppClientGrant`                                                                           | [shared.ConnectedAppClientGrantRef](../../../sdk/models/shared/connectedappclientgrantref.md)       | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `connectedAppOauthGrant`                                                                            | [shared.ConnectedAppOAuthGrantRef](../../../sdk/models/shared/connectedappoauthgrantref.md)         | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `deviceClient`                                                                                      | [shared.DeviceClientRef](../../../sdk/models/shared/deviceclientref.md)                             | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `personalClient`                                                                                    | [shared.PersonalClientRef](../../../sdk/models/shared/personalclientref.md)                         | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `servicePrincipalCredential`                                                                        | [shared.ServicePrincipalCredentialRef](../../../sdk/models/shared/serviceprincipalcredentialref.md) | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `systemClient`                                                                                      | [shared.SystemClientRef](../../../sdk/models/shared/systemclientref.md)                             | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |