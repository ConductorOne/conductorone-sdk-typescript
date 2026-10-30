# AgentStatus

AI-agent lifecycle status when this app user carries the agent trait.
 UNSPECIFIED marks a non-agent account. Read-only; translated from the
 model's agent_trait at the API boundary.

## Example Usage

```typescript
import { AgentStatus } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AgentStatus = "APP_USER_AGENT_STATUS_DELETED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"APP_USER_AGENT_STATUS_UNSPECIFIED" | "APP_USER_AGENT_STATUS_READY" | "APP_USER_AGENT_STATUS_DISABLED" | "APP_USER_AGENT_STATUS_DELETED" | Unrecognized<string>
```