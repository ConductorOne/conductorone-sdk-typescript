# ToolState

Which tool state to return count for on each server.

## Example Usage

```typescript
import { ToolState } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ToolState = "MCP_TOOL_STATE_PENDING_REVIEW";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"MCP_TOOL_STATE_UNSPECIFIED" | "MCP_TOOL_STATE_PENDING_REVIEW" | "MCP_TOOL_STATE_APPROVED" | "MCP_TOOL_STATE_DISABLED" | "MCP_TOOL_STATE_REMOVED" | Unrecognized<string>
```