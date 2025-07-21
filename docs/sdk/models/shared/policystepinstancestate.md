# PolicyStepInstanceState

The state of the step, which is either active or done.

## Example Usage

```typescript
import { PolicyStepInstanceState } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PolicyStepInstanceState = "POLICY_STEP_STATE_ACTIVE";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"POLICY_STEP_STATE_UNSPECIFIED" | "POLICY_STEP_STATE_ACTIVE" | "POLICY_STEP_STATE_DONE" | Unrecognized<string>
```