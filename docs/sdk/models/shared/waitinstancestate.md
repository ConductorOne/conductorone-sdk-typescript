# WaitInstanceState

The state field.

## Example Usage

```typescript
import { WaitInstanceState } from "conductorone-sdk-typescript/sdk/models/shared";

let value: WaitInstanceState = "WAIT_INSTANCE_STATE_COMPLETED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"WAIT_INSTANCE_STATE_UNSPECIFIED" | "WAIT_INSTANCE_STATE_WAITING" | "WAIT_INSTANCE_STATE_COMPLETED" | "WAIT_INSTANCE_STATE_TIMED_OUT" | Unrecognized<string>
```