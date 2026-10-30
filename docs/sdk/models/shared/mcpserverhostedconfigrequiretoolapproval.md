# MCPServerHostedConfigRequireToolApproval

Optional per-server override for tool approval when registering without an
 access level. See MCPServerView.require_tool_approval for semantics.

## Example Usage

```typescript
import { MCPServerHostedConfigRequireToolApproval } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPServerHostedConfigRequireToolApproval =
  "OPTIONAL_BOOL_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"OPTIONAL_BOOL_UNSPECIFIED" | "OPTIONAL_BOOL_TRUE" | "OPTIONAL_BOOL_FALSE" | Unrecognized<string>
```