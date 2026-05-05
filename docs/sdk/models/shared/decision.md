# Decision

Whether to run or cancel the paused executions.

## Example Usage

```typescript
import { Decision } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Decision = "PAUSED_EXECUTION_DECISION_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"PAUSED_EXECUTION_DECISION_UNSPECIFIED" | "PAUSED_EXECUTION_DECISION_RUN" | "PAUSED_EXECUTION_DECISION_CANCEL" | Unrecognized<string>
```