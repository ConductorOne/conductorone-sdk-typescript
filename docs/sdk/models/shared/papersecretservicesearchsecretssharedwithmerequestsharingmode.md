# PaperSecretServiceSearchSecretsSharedWithMeRequestSharingMode

Filter by sharing mode. Unspecified returns internal secrets; external returns none.

## Example Usage

```typescript
import { PaperSecretServiceSearchSecretsSharedWithMeRequestSharingMode } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PaperSecretServiceSearchSecretsSharedWithMeRequestSharingMode =
  "PAPER_VAULT_SHARING_MODE_EXTERNAL";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"PAPER_VAULT_SHARING_MODE_UNSPECIFIED" | "PAPER_VAULT_SHARING_MODE_INTERNAL" | "PAPER_VAULT_SHARING_MODE_EXTERNAL" | Unrecognized<string>
```