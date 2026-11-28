# OAuthAuthorizationClientAuthPrivateKeyJWT

The client authenticates with private_key_jwt and retains its private keys.

## Example Usage

```typescript
import { OAuthAuthorizationClientAuthPrivateKeyJWT } from "conductorone-sdk-typescript/sdk/models/shared";

let value: OAuthAuthorizationClientAuthPrivateKeyJWT = {};
```

## Fields

| Field                                                                                                                                                                                 | Type                                                                                                                                                                                  | Required                                                                                                                                                                              | Description                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `publicJwks`                                                                                                                                                                          | *string*                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                    | The registered public JWK Set as a JSON document, not a URL.<br/> Contains only public key material and standard key metadata. Empty when the<br/> registered set cannot be safely displayed. |