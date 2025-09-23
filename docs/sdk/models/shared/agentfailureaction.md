# AgentFailureAction

The action to take if the agent fails to approve, deny, or reassign the task.

## Example Usage

```typescript
import { AgentFailureAction } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AgentFailureAction =
  "APPROVAL_AGENT_FAILURE_ACTION_REASSIGN_TO_SUPER_ADMINS";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"APPROVAL_AGENT_FAILURE_ACTION_UNSPECIFIED" | "APPROVAL_AGENT_FAILURE_ACTION_REASSIGN_TO_USERS" | "APPROVAL_AGENT_FAILURE_ACTION_REASSIGN_TO_SUPER_ADMINS" | "APPROVAL_AGENT_FAILURE_ACTION_SKIP_POLICY_STEP" | Unrecognized<string>
```