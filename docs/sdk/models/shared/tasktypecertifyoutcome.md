# TaskTypeCertifyOutcome

The outcome of the certification.

## Example Usage

```typescript
import { TaskTypeCertifyOutcome } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskTypeCertifyOutcome = "CERTIFY_OUTCOME_DECERTIFIED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"CERTIFY_OUTCOME_UNSPECIFIED" | "CERTIFY_OUTCOME_CERTIFIED" | "CERTIFY_OUTCOME_DECERTIFIED" | "CERTIFY_OUTCOME_ERROR" | "CERTIFY_OUTCOME_CANCELLED" | "CERTIFY_OUTCOME_WAIT_TIMED_OUT" | Unrecognized<string>
```