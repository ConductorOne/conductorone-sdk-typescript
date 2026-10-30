# ExternalOAuthClientServiceCreateResponse

The ExternalOAuthClientServiceCreateResponse message.

## Example Usage

```typescript
import { ExternalOAuthClientServiceCreateResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ExternalOAuthClientServiceCreateResponse = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `client`                                                                                | [shared.ExternalOAuthClientInfo](../../../sdk/models/shared/externaloauthclientinfo.md) | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `clientSecret`                                                                          | *string*                                                                                | :heavy_minus_sign:                                                                      | Revealed once. Empty for PRIVATE_KEY_JWT.                                               |