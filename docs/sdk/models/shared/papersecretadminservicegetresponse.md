# PaperSecretAdminServiceGetResponse

The PaperSecretAdminServiceGetResponse message.

## Example Usage

```typescript
import { PaperSecretAdminServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PaperSecretAdminServiceGetResponse = {};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `paperSecret`                                                                                                                     | [shared.PaperSecret](../../../sdk/models/shared/papersecret.md)                                                                   | :heavy_minus_sign:                                                                                                                | PaperSecret is the API view of a secret (combines Vault + PaperVault fields).<br/> The vault_id is the primary identifier (Vault.id). |