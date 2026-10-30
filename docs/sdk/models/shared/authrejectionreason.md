# AuthRejectionReason

Why authentication rejected the request. Set only when outcome is
 AUTH_REJECTED.

## Example Usage

```typescript
import { AuthRejectionReason } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AuthRejectionReason = "TB_AUTH_REJECTION_REASON_MISSING_CREDENTIAL";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"TB_AUTH_REJECTION_REASON_UNSPECIFIED" | "TB_AUTH_REJECTION_REASON_MISSING_CREDENTIAL" | "TB_AUTH_REJECTION_REASON_INVALID_TOKEN" | "TB_AUTH_REJECTION_REASON_EXPIRED_TOKEN" | "TB_AUTH_REJECTION_REASON_UNKNOWN_TENANT" | "TB_AUTH_REJECTION_REASON_AUDIENCE_MISMATCH" | "TB_AUTH_REJECTION_REASON_INSUFFICIENT_SCOPE" | "TB_AUTH_REJECTION_REASON_INVALID_PROOF" | "TB_AUTH_REJECTION_REASON_CREDENTIAL_UNAVAILABLE" | Unrecognized<string>
```