# VaultInput

Vault represents an external secret storage integration used to store connector credentials securely.

This message contains a oneof named vault. Only a single field of the following list may be set at a time:
  - groupAuthzVault
  - magicVault


## Example Usage

```typescript
import { VaultInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: VaultInput = {};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `credentialExpirationDuration`                                                                                  | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | N/A                                                                                                             |
| `description`                                                                                                   | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | A free-text description of the vault's purpose or configuration.                                                |
| `displayName`                                                                                                   | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | The human-readable name of the vault.                                                                           |
| `groupAuthzVault`                                                                                               | [shared.GroupAuthzVault](../../../sdk/models/shared/groupauthzvault.md)                                         | :heavy_minus_sign:                                                                                              | GroupAuthzVault configures a vault that uses group-based authorization to control access to stored credentials. |
| `id`                                                                                                            | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | The unique identifier of the vault.                                                                             |
| `magicVault`                                                                                                    | [shared.MagicVault](../../../sdk/models/shared/magicvault.md)                                                   | :heavy_minus_sign:                                                                                              | MagicVault configures a vault that grants time-limited credential access via magic links.                       |