# VaultServiceCreateRequest

The VaultServiceCreateRequest message.

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

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `description`                                                           | *string*                                                                | :heavy_minus_sign:                                                      | The description field.                                                  |
| `displayName`                                                           | *string*                                                                | :heavy_check_mark:                                                      | The displayName field.                                                  |
| `groupAuthzVault`                                                       | [shared.GroupAuthzVault](../../../sdk/models/shared/groupauthzvault.md) | :heavy_minus_sign:                                                      | The GroupAuthzVault message.                                            |
| `magicVault`                                                            | [shared.MagicVault](../../../sdk/models/shared/magicvault.md)           | :heavy_minus_sign:                                                      | The MagicVault message.                                                 |
| `ownerIds`                                                              | *string*[]                                                              | :heavy_minus_sign:                                                      | The ownerIds field.                                                     |