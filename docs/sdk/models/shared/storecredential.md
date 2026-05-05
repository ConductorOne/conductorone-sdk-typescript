# StoreCredential

StoreCredential stores a credential from GeneratePassword in a vault.
 Supports Paper Vault (SSO/email) and App Vault (entitlement-bound).

## Example Usage

```typescript
import { StoreCredential } from "conductorone-sdk-typescript/sdk/models/shared";

let value: StoreCredential = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `appIdCel`                                                                              | *string*                                                                                | :heavy_minus_sign:                                                                      | CEL expression that resolves to app ID (App Vault only)                                 |
| `authType`                                                                              | [shared.AuthType](../../../sdk/models/shared/authtype.md)                               | :heavy_minus_sign:                                                                      | Authentication type for the paper vault recipient (Paper Vault only)                    |
| `credentialCel`                                                                         | *string*                                                                                | :heavy_minus_sign:                                                                      | CEL expression that resolves to the encrypted credential from GeneratePassword          |
| `expiry`                                                                                | *string*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `labelCel`                                                                              | *string*                                                                                | :heavy_minus_sign:                                                                      | Optional display label for the vault                                                    |
| `maxViews`                                                                              | *number*                                                                                | :heavy_minus_sign:                                                                      | Maximum number of views (0 = unlimited, default 1) (Paper Vault only)                   |
| `recipientCel`                                                                          | *string*                                                                                | :heavy_minus_sign:                                                                      | CEL expression resolving to the C1 user ID of the recipient (SSO_INTERNAL / App Vault)  |
| `recipientEmailCel`                                                                     | *string*                                                                                | :heavy_minus_sign:                                                                      | CEL expression resolving to a recipient email address (Paper Vault + VERIFY_EMAIL only) |
| `ttl`                                                                                   | *string*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `vaultType`                                                                             | [shared.VaultType](../../../sdk/models/shared/vaulttype.md)                             | :heavy_minus_sign:                                                                      | Vault type selector (default: PAPER_VAULT for backward compatibility)                   |