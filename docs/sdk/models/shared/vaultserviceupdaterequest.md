# VaultServiceUpdateRequest

The VaultServiceUpdateRequest message contains the vault object to update and a field mask to indicate which fields to update.

## Example Usage

```typescript
import { VaultServiceUpdateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: VaultServiceUpdateRequest = {};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `updateMask`                                                                                                                                                       | *string*                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                 | N/A                                                                                                                                                                |
| `vault`                                                                                                                                                            | [shared.VaultInput](../../../sdk/models/shared/vaultinput.md)                                                                                                      | :heavy_minus_sign:                                                                                                                                                 | The Vault message.<br/><br/>This message contains a oneof named vault. Only a single field of the following list may be set at a time:<br/>  - groupAuthzVault<br/>  - magicVault<br/> |