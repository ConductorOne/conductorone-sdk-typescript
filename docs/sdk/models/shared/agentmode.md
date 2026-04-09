# AgentMode

The mode of the agent, full control, change policy only, or comment only.

## Example Usage

```typescript
import { AgentMode } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AgentMode = "APPROVAL_AGENT_MODE_COMMENT_ONLY";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"APPROVAL_AGENT_MODE_UNSPECIFIED" | "APPROVAL_AGENT_MODE_FULL_CONTROL" | "APPROVAL_AGENT_MODE_CHANGE_POLICY_ONLY" | "APPROVAL_AGENT_MODE_COMMENT_ONLY" | Unrecognized<string>
```