# LocalUserInvitationStatus

Current lifecycle status. Read-only.

## Example Usage

```typescript
import { LocalUserInvitationStatus } from "conductorone-sdk-typescript/sdk/models/shared";

let value: LocalUserInvitationStatus = "LOCAL_INVITATION_STATUS_ACCEPTED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"LOCAL_INVITATION_STATUS_UNSPECIFIED" | "LOCAL_INVITATION_STATUS_PENDING" | "LOCAL_INVITATION_STATUS_ACCEPTED" | "LOCAL_INVITATION_STATUS_REVOKED" | "LOCAL_INVITATION_STATUS_EXPIRED" | Unrecognized<string>
```