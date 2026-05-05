# ActionInstanceState

The current state of the action execution.

## Example Usage

```typescript
import { ActionInstanceState } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ActionInstanceState = "ACTION_INSTANCE_STATE_RUNNING";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"ACTION_INSTANCE_STATE_UNSPECIFIED" | "ACTION_INSTANCE_STATE_INIT" | "ACTION_INSTANCE_STATE_RUNNING" | "ACTION_INSTANCE_STATE_DONE" | "ACTION_INSTANCE_STATE_ERROR" | Unrecognized<string>
```