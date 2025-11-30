# ActionInstanceState

The current state of the action execution.

## Example Usage

```typescript
import { ActionInstanceState } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ActionInstanceState = "ACTION_INSTANCE_STATE_RUNNING";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ACTION_INSTANCE_STATE_UNSPECIFIED" | "ACTION_INSTANCE_STATE_INIT" | "ACTION_INSTANCE_STATE_RUNNING" | "ACTION_INSTANCE_STATE_DONE" | "ACTION_INSTANCE_STATE_ERROR" | Unrecognized<string>
```