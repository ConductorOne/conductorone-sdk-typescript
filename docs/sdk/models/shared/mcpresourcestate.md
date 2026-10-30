# MCPResourceState

Resource approval/lifecycle state.

## Example Usage

```typescript
import { MCPResourceState } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPResourceState = "MCP_RESOURCE_STATE_APPROVED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"MCP_RESOURCE_STATE_UNSPECIFIED" | "MCP_RESOURCE_STATE_PENDING_REVIEW" | "MCP_RESOURCE_STATE_APPROVED" | "MCP_RESOURCE_STATE_DISABLED" | "MCP_RESOURCE_STATE_REMOVED" | Unrecognized<string>
```