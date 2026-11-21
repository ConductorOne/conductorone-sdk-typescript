# OAuthAuthorizationClientAuthentication

OAuthAuthorizationClientAuthentication describes the authentication method
 assigned to an OAuth authorization. It never contains a client secret.

This message contains a oneof named method. Only a single field of the following list may be set at a time:
  - clientSecretBasic
  - clientSecretPost
  - privateKeyJwt


## Example Usage

```typescript
import { OAuthAuthorizationClientAuthentication } from "conductorone-sdk-typescript/sdk/models/shared";

let value: OAuthAuthorizationClientAuthentication = {};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `clientSecretBasic`                                                                                                                 | [shared.OAuthAuthorizationClientAuthClientSecretBasic](../../../sdk/models/shared/oauthauthorizationclientauthclientsecretbasic.md) | :heavy_minus_sign:                                                                                                                  | N/A                                                                                                                                 |
| `clientSecretPost`                                                                                                                  | [shared.OAuthAuthorizationClientAuthClientSecretPost](../../../sdk/models/shared/oauthauthorizationclientauthclientsecretpost.md)   | :heavy_minus_sign:                                                                                                                  | N/A                                                                                                                                 |
| `privateKeyJwt`                                                                                                                     | [shared.OAuthAuthorizationClientAuthPrivateKeyJWT](../../../sdk/models/shared/oauthauthorizationclientauthprivatekeyjwt.md)         | :heavy_minus_sign:                                                                                                                  | N/A                                                                                                                                 |