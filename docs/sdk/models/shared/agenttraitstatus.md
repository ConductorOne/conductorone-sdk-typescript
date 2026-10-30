# AgentTraitStatus

The agent's lifecycle status (READY, DISABLED, DELETED).

## Example Usage

```typescript
import { AgentTraitStatus } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AgentTraitStatus = "AGENT_STATUS_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"AGENT_STATUS_UNSPECIFIED" | "AGENT_STATUS_READY" | "AGENT_STATUS_DISABLED" | "AGENT_STATUS_DELETED" | Unrecognized<string>
```