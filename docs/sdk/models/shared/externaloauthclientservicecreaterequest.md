# ExternalOAuthClientServiceCreateRequest

The ExternalOAuthClientServiceCreateRequest message.

## Example Usage

```typescript
import { ExternalOAuthClientServiceCreateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ExternalOAuthClientServiceCreateRequest = {};
```

## Fields

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `authMethod`                                                                                                                                | [shared.ExternalOAuthClientServiceCreateRequestAuthMethod](../../../sdk/models/shared/externaloauthclientservicecreaterequestauthmethod.md) | :heavy_minus_sign:                                                                                                                          | The authMethod field.                                                                                                                       |
| `clientName`                                                                                                                                | *string*                                                                                                                                    | :heavy_minus_sign:                                                                                                                          | Operator-facing name shown on the consent screen and in the admin list.                                                                     |
| `publicJwks`                                                                                                                                | *string*                                                                                                                                    | :heavy_minus_sign:                                                                                                                          | RFC 7517 JWK Set. Required when auth_method is PRIVATE_KEY_JWT and rejected<br/> otherwise.                                                 |
| `redirectUris`                                                                                                                              | *string*[]                                                                                                                                  | :heavy_minus_sign:                                                                                                                          | Exact redirect URIs the client may be sent to. Microsoft's fixed literal,<br/> for example, is registered here.                             |