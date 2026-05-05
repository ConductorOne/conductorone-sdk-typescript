# StatusFilter

Optional filter by invitation status.

## Example Usage

```typescript
import { StatusFilter } from "conductorone-sdk-typescript/sdk/models/shared";

let value: StatusFilter = "LOCAL_INVITATION_STATUS_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"LOCAL_INVITATION_STATUS_UNSPECIFIED" | "LOCAL_INVITATION_STATUS_PENDING" | "LOCAL_INVITATION_STATUS_ACCEPTED" | "LOCAL_INVITATION_STATUS_REVOKED" | "LOCAL_INVITATION_STATUS_EXPIRED" | Unrecognized<string>
```