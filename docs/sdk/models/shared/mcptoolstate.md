# MCPToolState

Tool approval/lifecycle state.

## Example Usage

```typescript
import { MCPToolState } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPToolState = "MCP_TOOL_STATE_DISABLED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"MCP_TOOL_STATE_UNSPECIFIED" | "MCP_TOOL_STATE_PENDING_REVIEW" | "MCP_TOOL_STATE_APPROVED" | "MCP_TOOL_STATE_DISABLED" | "MCP_TOOL_STATE_REMOVED" | Unrecognized<string>
```