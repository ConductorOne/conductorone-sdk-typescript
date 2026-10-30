# EncryptionAlgorithm

The algorithm used when encrypt_assertions is set.

## Example Usage

```typescript
import { EncryptionAlgorithm } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EncryptionAlgorithm = "SAML_ENCRYPTION_ALGORITHM_AES256_CBC";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"SAML_ENCRYPTION_ALGORITHM_UNSPECIFIED" | "SAML_ENCRYPTION_ALGORITHM_AES256_GCM" | "SAML_ENCRYPTION_ALGORITHM_AES128_GCM" | "SAML_ENCRYPTION_ALGORITHM_AES256_CBC" | Unrecognized<string>
```