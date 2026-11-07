# ~~RequireToolApproval~~

Deprecated: set tool_enablement on the MCP registration config instead.
 Still read as the tool approval fallback for MCP servers without a saved
 tool_enablement mode. UNSPECIFIED inherits the tenant setting.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import { RequireToolApproval } from "conductorone-sdk-typescript/sdk/models/shared";

let value: RequireToolApproval = "OPTIONAL_BOOL_TRUE";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"OPTIONAL_BOOL_UNSPECIFIED" | "OPTIONAL_BOOL_TRUE" | "OPTIONAL_BOOL_FALSE" | Unrecognized<string>
```