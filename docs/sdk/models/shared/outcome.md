# Outcome

The outcome field.

## Example Usage

```typescript
import { Outcome } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Outcome = "ACTION_OUTCOME_UNSPECIFIED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ACTION_OUTCOME_UNSPECIFIED" | "ACTION_OUTCOME_SUCCESS" | "ACTION_OUTCOME_DENIED" | "ACTION_OUTCOME_ERROR" | "ACTION_OUTCOME_CANCELLED" | Unrecognized<string>
```