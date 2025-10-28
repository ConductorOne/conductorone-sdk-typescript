# RevokeOutcomes

## Example Usage

```typescript
import { RevokeOutcomes } from "conductorone-sdk-typescript/sdk/models/shared";

let value: RevokeOutcomes = "REVOKE_OUTCOME_DENIED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"REVOKE_OUTCOME_UNSPECIFIED" | "REVOKE_OUTCOME_REVOKED" | "REVOKE_OUTCOME_DENIED" | "REVOKE_OUTCOME_ERROR" | "REVOKE_OUTCOME_CANCELLED" | "REVOKE_OUTCOME_WAIT_TIMED_OUT" | Unrecognized<string>
```