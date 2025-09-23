# CurrentState

The currentState field.

## Example Usage

```typescript
import { CurrentState } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CurrentState = "TASK_STATE_OPEN";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"TASK_STATE_UNSPECIFIED" | "TASK_STATE_OPEN" | "TASK_STATE_CLOSED" | Unrecognized<string>
```