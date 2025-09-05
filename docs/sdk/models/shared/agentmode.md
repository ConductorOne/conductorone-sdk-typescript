# AgentMode

The mode of the agent, full control, change policy only, or comment only.

## Example Usage

```typescript
import { AgentMode } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AgentMode = "APPROVAL_AGENT_MODE_COMMENT_ONLY";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"APPROVAL_AGENT_MODE_UNSPECIFIED" | "APPROVAL_AGENT_MODE_FULL_CONTROL" | "APPROVAL_AGENT_MODE_CHANGE_POLICY_ONLY" | "APPROVAL_AGENT_MODE_COMMENT_ONLY" | Unrecognized<string>
```