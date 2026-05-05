# AccountDisabledAction

Action to take when an account-disabled event is received.

## Example Usage

```typescript
import { AccountDisabledAction } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccountDisabledAction = "SSF_REVOCATION_ACTION_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"SSF_REVOCATION_ACTION_UNSPECIFIED" | "SSF_REVOCATION_ACTION_REVOKE_ALL" | "SSF_REVOCATION_ACTION_LOG_ONLY" | Unrecognized<string>
```