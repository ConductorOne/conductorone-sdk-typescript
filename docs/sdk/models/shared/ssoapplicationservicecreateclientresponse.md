# SSOApplicationServiceCreateClientResponse

SSOApplicationServiceCreateClientResponse contains the generated client and
 its one-time secret, when applicable.

## Example Usage

```typescript
import { SSOApplicationServiceCreateClientResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SSOApplicationServiceCreateClientResponse = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `client`                                                                                   | [shared.SSOApplicationOIDCClient](../../../sdk/models/shared/ssoapplicationoidcclient.md)  | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `clientSecret`                                                                             | *string*                                                                                   | :heavy_minus_sign:                                                                         | Returned once for client_secret_basic/client_secret_post; empty for<br/> none/private_key_jwt. |