# TBAuditAttestationKey

TBAuditAttestationKey is a trusted manifest signing key.

## Example Usage

```typescript
import { TBAuditAttestationKey } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TBAuditAttestationKey = {};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `keyId`                                                                                         | *string*                                                                                        | :heavy_minus_sign:                                                                              | First 16 bytes of the SHA-256 of the raw public key, hex.                                       |
| `publicKey`                                                                                     | *string*                                                                                        | :heavy_minus_sign:                                                                              | Raw Ed25519 public key, 32 bytes, hex.                                                          |
| `status`                                                                                        | [shared.TBAuditAttestationKeyStatus](../../../sdk/models/shared/tbauditattestationkeystatus.md) | :heavy_minus_sign:                                                                              | The status field.                                                                               |