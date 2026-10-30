# RequireToolApproval

Per-server override for tool approval on MCP servers without a saved
 registration access level. UNSPECIFIED inherits the tenant setting.

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