# ExternalOAuthClientServiceUpdateRequest

The ExternalOAuthClientServiceUpdateRequest message.

## Example Usage

```typescript
import { ExternalOAuthClientServiceUpdateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ExternalOAuthClientServiceUpdateRequest = {};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `clientId`                                                                                                 | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The clientId field.                                                                                        |
| `clientName`                                                                                               | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Replacement display name shown on the consent screen and in the admin list.                                |
| `publicJwks`                                                                                               | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Replacement RFC 7517 JWK Set. Only accepted for a client that already<br/> authenticates with private_key_jwt. |
| `redirectUris`                                                                                             | *string*[]                                                                                                 | :heavy_minus_sign:                                                                                         | Replacement exact redirect set. A client always keeps at least one redirect<br/> URI.                      |
| `updateMask`                                                                                               | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |