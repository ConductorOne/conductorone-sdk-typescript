# CredentialStatus

Lifecycle status of this credential record.

## Example Usage

```typescript
import { CredentialStatus } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CredentialStatus = "TUNNEL_CREDENTIAL_STATUS_REVOKED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"TUNNEL_CREDENTIAL_STATUS_UNSPECIFIED" | "TUNNEL_CREDENTIAL_STATUS_ACTIVE" | "TUNNEL_CREDENTIAL_STATUS_REVOKED" | "TUNNEL_CREDENTIAL_STATUS_EXPIRED" | Unrecognized<string>
```