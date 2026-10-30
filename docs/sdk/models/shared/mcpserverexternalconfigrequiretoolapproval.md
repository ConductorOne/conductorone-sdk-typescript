# MCPServerExternalConfigRequireToolApproval

Optional per-server override for tool approval when registering without an
 access level. See MCPServerView.require_tool_approval for semantics.

## Example Usage

```typescript
import { MCPServerExternalConfigRequireToolApproval } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPServerExternalConfigRequireToolApproval = "OPTIONAL_BOOL_TRUE";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"OPTIONAL_BOOL_UNSPECIFIED" | "OPTIONAL_BOOL_TRUE" | "OPTIONAL_BOOL_FALSE" | Unrecognized<string>
```