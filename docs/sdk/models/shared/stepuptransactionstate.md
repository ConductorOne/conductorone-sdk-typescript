# StepUpTransactionState

Current state of the transaction

## Example Usage

```typescript
import { StepUpTransactionState } from "conductorone-sdk-typescript/sdk/models/shared";

let value: StepUpTransactionState = "STEP_UP_TRANSACTION_STATE_UNSPECIFIED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"STEP_UP_TRANSACTION_STATE_UNSPECIFIED" | "STEP_UP_TRANSACTION_STATE_PENDING" | "STEP_UP_TRANSACTION_STATE_VERIFIED" | "STEP_UP_TRANSACTION_STATE_ERROR" | Unrecognized<string>
```