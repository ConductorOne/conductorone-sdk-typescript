# SSOApplicationOIDCClientAuthentication

SSOApplicationOIDCClientAuthentication is the exact token-endpoint client
 authentication method assigned to an OIDC client.

This message contains a oneof named method. Only a single field of the following list may be set at a time:
  - none
  - clientSecretBasic
  - clientSecretPost
  - privateKeyJwt


## Example Usage

```typescript
import { SSOApplicationOIDCClientAuthentication } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SSOApplicationOIDCClientAuthentication = {};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `clientSecretBasic`                                                                                                                 | [shared.SSOApplicationOIDCClientAuthClientSecretBasic](../../../sdk/models/shared/ssoapplicationoidcclientauthclientsecretbasic.md) | :heavy_minus_sign:                                                                                                                  | N/A                                                                                                                                 |
| `clientSecretPost`                                                                                                                  | [shared.SSOApplicationOIDCClientAuthClientSecretPost](../../../sdk/models/shared/ssoapplicationoidcclientauthclientsecretpost.md)   | :heavy_minus_sign:                                                                                                                  | N/A                                                                                                                                 |
| `none`                                                                                                                              | [shared.SSOApplicationOIDCClientAuthNone](../../../sdk/models/shared/ssoapplicationoidcclientauthnone.md)                           | :heavy_minus_sign:                                                                                                                  | N/A                                                                                                                                 |
| `privateKeyJwt`                                                                                                                     | [shared.SSOApplicationOIDCClientAuthPrivateKeyJWT](../../../sdk/models/shared/ssoapplicationoidcclientauthprivatekeyjwt.md)         | :heavy_minus_sign:                                                                                                                  | N/A                                                                                                                                 |