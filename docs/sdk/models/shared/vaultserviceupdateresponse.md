# VaultServiceUpdateResponse

The VaultServiceUpdateResponse message.

## Example Usage

```typescript
import { VaultServiceUpdateResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: VaultServiceUpdateResponse = {};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `vault`                                                                                                                                                            | [shared.Vault](../../../sdk/models/shared/vault.md)                                                                                                                | :heavy_minus_sign:                                                                                                                                                 | The Vault message.<br/><br/>This message contains a oneof named vault. Only a single field of the following list may be set at a time:<br/>  - groupAuthzVault<br/>  - magicVault<br/> |