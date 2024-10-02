# ApprovalInstanceState

The state of the approval instance

## Example Usage

```typescript
import { ApprovalInstanceState } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ApprovalInstanceState = "APPROVAL_INSTANCE_STATE_DONE";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"APPROVAL_INSTANCE_STATE_UNSPECIFIED" | "APPROVAL_INSTANCE_STATE_INIT" | "APPROVAL_INSTANCE_STATE_SENDING_NOTIFICATIONS" | "APPROVAL_INSTANCE_STATE_WAITING" | "APPROVAL_INSTANCE_STATE_DONE" | Unrecognized<string>
```