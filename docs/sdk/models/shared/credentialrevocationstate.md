# CredentialRevocationState

The state field.

## Example Usage

```typescript
import { CredentialRevocationState } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CredentialRevocationState =
  "CREDENTIAL_REVOCATION_STATE_UNAVAILABLE";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"CREDENTIAL_REVOCATION_STATE_UNSPECIFIED" | "CREDENTIAL_REVOCATION_STATE_READY" | "CREDENTIAL_REVOCATION_STATE_REVOKING" | "CREDENTIAL_REVOCATION_STATE_REVOKE_FAILED" | "CREDENTIAL_REVOCATION_STATE_UNAVAILABLE" | "CREDENTIAL_REVOCATION_STATE_REVOKED" | Unrecognized<string>
```