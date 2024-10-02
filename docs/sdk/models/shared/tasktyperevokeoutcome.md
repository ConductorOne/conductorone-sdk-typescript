# TaskTypeRevokeOutcome

The outcome of the revoke.

## Example Usage

```typescript
import { TaskTypeRevokeOutcome } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskTypeRevokeOutcome = "REVOKE_OUTCOME_CANCELLED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"REVOKE_OUTCOME_UNSPECIFIED" | "REVOKE_OUTCOME_REVOKED" | "REVOKE_OUTCOME_DENIED" | "REVOKE_OUTCOME_ERROR" | "REVOKE_OUTCOME_CANCELLED" | "REVOKE_OUTCOME_WAIT_TIMED_OUT" | Unrecognized<string>
```