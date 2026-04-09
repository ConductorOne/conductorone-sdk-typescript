# TenantAuthConfigInput

The TenantAuthConfig message.

This message contains a oneof named provider_config. Only a single field of the following list may be set at a time:
  - google
  - microsoft
  - okta
  - onelogin
  - jumpcloud
  - pingone
  - oidc
  - c1Local


## Example Usage

```typescript
import { TenantAuthConfigInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TenantAuthConfigInput = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `bootstrapDomains`                                                                            | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | Bootstrap routing: email domains that route unknown users to this config.                     |
| `authConfigC1Local`                                                                           | [shared.AuthConfigC1Local](../../../sdk/models/shared/authconfigc1local.md)                   | :heavy_minus_sign:                                                                            | The AuthConfigC1Local message.                                                                |
| `deprecationDeadline`                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `deprecationMessage`                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | User-visible message shown when status=DEPRECATED.                                            |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The displayName field.                                                                        |
| `authConfigGoogle`                                                                            | [shared.AuthConfigGoogle](../../../sdk/models/shared/authconfiggoogle.md)                     | :heavy_minus_sign:                                                                            | The AuthConfigGoogle message.                                                                 |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The id field.                                                                                 |
| `isDefaultBootstrap`                                                                          | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | The isDefaultBootstrap field.                                                                 |
| `authConfigJumpCloud`                                                                         | [shared.AuthConfigJumpCloud](../../../sdk/models/shared/authconfigjumpcloud.md)               | :heavy_minus_sign:                                                                            | The AuthConfigJumpCloud message.                                                              |
| `authConfigMicrosoft`                                                                         | [shared.AuthConfigMicrosoft](../../../sdk/models/shared/authconfigmicrosoft.md)               | :heavy_minus_sign:                                                                            | The AuthConfigMicrosoft message.                                                              |
| `authConfigOIDC`                                                                              | [shared.AuthConfigOIDC](../../../sdk/models/shared/authconfigoidc.md)                         | :heavy_minus_sign:                                                                            | The AuthConfigOIDC message.                                                                   |
| `authConfigOkta`                                                                              | [shared.AuthConfigOkta](../../../sdk/models/shared/authconfigokta.md)                         | :heavy_minus_sign:                                                                            | The AuthConfigOkta message.                                                                   |
| `authConfigOneLogin`                                                                          | [shared.AuthConfigOneLogin](../../../sdk/models/shared/authconfigonelogin.md)                 | :heavy_minus_sign:                                                                            | The AuthConfigOneLogin message.                                                               |
| `authConfigPingOne`                                                                           | [shared.AuthConfigPingOne](../../../sdk/models/shared/authconfigpingone.md)                   | :heavy_minus_sign:                                                                            | The AuthConfigPingOne message.                                                                |
| `status`                                                                                      | [shared.TenantAuthConfigStatus](../../../sdk/models/shared/tenantauthconfigstatus.md)         | :heavy_minus_sign:                                                                            | The status field.                                                                             |