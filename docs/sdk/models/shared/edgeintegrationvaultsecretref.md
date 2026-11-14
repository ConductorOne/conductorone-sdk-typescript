# EdgeIntegrationVaultSecretRef

EdgeIntegrationVaultSecretRef names an existing modern shared Vault credential.
 The integration type determines the content type; Socket requires api_key.

## Example Usage

```typescript
import { EdgeIntegrationVaultSecretRef } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeIntegrationVaultSecretRef = {};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `secretId`                          | *string*                            | :heavy_minus_sign:                  | Secret identifier within the Vault. |
| `vaultBoundaryId`                   | *string*                            | :heavy_minus_sign:                  | Vault containing the secret.        |