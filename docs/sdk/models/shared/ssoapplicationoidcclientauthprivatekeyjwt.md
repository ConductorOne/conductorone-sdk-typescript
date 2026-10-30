# SSOApplicationOIDCClientAuthPrivateKeyJWT

RFC 7523 private_key_jwt using an inline RFC 7517 JWK Set. Multiple public
 signing keys allow overlap during relying-party key rotation; C1 selects by
 the assertion's `kid`. The relying party retains every private key.

## Example Usage

```typescript
import { SSOApplicationOIDCClientAuthPrivateKeyJWT } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SSOApplicationOIDCClientAuthPrivateKeyJWT = {
  publicJwks: "<value>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `publicJwks`          | *string*              | :heavy_check_mark:    | The publicJwks field. |