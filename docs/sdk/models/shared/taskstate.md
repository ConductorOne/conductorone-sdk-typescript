# TaskState

The current state of the task as defined by the `state_enum`

## Example Usage

```typescript
import { TaskState } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskState = "TASK_STATE_UNSPECIFIED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"TASK_STATE_UNSPECIFIED" | "TASK_STATE_OPEN" | "TASK_STATE_CLOSED" | Unrecognized<string>
```