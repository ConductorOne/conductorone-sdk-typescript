# SSOApplicationServiceCreateResponse

SSOApplicationServiceCreateResponse returns the created SSO application.

## Example Usage

```typescript
import { SSOApplicationServiceCreateResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SSOApplicationServiceCreateResponse = {};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `application`                                                                                               | [shared.SSOApplication](../../../sdk/models/shared/ssoapplication.md)                                       | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `client`                                                                                                    | [shared.SSOApplicationOIDCClient](../../../sdk/models/shared/ssoapplicationoidcclient.md)                   | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `clientSecret`                                                                                              | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | Confidential-client secret returned once. Empty for SAML and public OIDC<br/> clients. C1 stores only its hash. |