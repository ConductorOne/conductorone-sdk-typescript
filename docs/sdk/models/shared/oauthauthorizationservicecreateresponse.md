# OAuthAuthorizationServiceCreateResponse

The OAuthAuthorizationServiceCreateResponse message.

## Example Usage

```typescript
import { OAuthAuthorizationServiceCreateResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: OAuthAuthorizationServiceCreateResponse = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `authorization`                                                                         | [shared.OAuthAuthorization](../../../sdk/models/shared/oauthauthorization.md)           | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `client`                                                                                | [shared.ExternalOAuthClientInfo](../../../sdk/models/shared/externaloauthclientinfo.md) | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `clientSecret`                                                                          | *string*                                                                                | :heavy_minus_sign:                                                                      | The clientSecret field.                                                                 |