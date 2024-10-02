# TaskTypeGrantOutcome

The outcome of the grant.

## Example Usage

```typescript
import { TaskTypeGrantOutcome } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskTypeGrantOutcome = "GRANT_OUTCOME_ERROR";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"GRANT_OUTCOME_UNSPECIFIED" | "GRANT_OUTCOME_GRANTED" | "GRANT_OUTCOME_DENIED" | "GRANT_OUTCOME_ERROR" | "GRANT_OUTCOME_CANCELLED" | "GRANT_OUTCOME_WAIT_TIMED_OUT" | Unrecognized<string>
```