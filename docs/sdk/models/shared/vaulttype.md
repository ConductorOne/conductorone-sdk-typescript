# VaultType

Vault type selector (default: PAPER_VAULT for backward compatibility)

## Example Usage

```typescript
import { VaultType } from "conductorone-sdk-typescript/sdk/models/shared";

let value: VaultType = "STORE_CREDENTIAL_VAULT_TYPE_PAPER_VAULT";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"STORE_CREDENTIAL_VAULT_TYPE_UNSPECIFIED" | "STORE_CREDENTIAL_VAULT_TYPE_PAPER_VAULT" | "STORE_CREDENTIAL_VAULT_TYPE_APP_VAULT" | Unrecognized<string>
```