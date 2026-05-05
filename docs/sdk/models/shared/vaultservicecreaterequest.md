# VaultServiceCreateRequest

VaultServiceCreateRequest is the request message for creating a new vault.

This message contains a oneof named vault. Only a single field of the following list may be set at a time:
  - groupAuthzVault
  - magicVault


## Example Usage

```typescript
import { VaultServiceCreateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: VaultServiceCreateRequest = {
  displayName: "Daniela_Kautzer",
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `description`                                                                                                   | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | A free-text description of the vault's purpose or configuration.                                                |
| `displayName`                                                                                                   | *string*                                                                                                        | :heavy_check_mark:                                                                                              | The human-readable name for the new vault.                                                                      |
| `groupAuthzVault`                                                                                               | [shared.GroupAuthzVault](../../../sdk/models/shared/groupauthzvault.md)                                         | :heavy_minus_sign:                                                                                              | GroupAuthzVault configures a vault that uses group-based authorization to control access to stored credentials. |
| `magicVault`                                                                                                    | [shared.MagicVault](../../../sdk/models/shared/magicvault.md)                                                   | :heavy_minus_sign:                                                                                              | MagicVault configures a vault that grants time-limited credential access via magic links.                       |
| `ownerIds`                                                                                                      | *string*[]                                                                                                      | :heavy_minus_sign:                                                                                              | The IDs of users to assign as owners of this vault.                                                             |