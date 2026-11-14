# ~~MCPServerHostedConfigRequireToolApproval~~

Deprecated and ignored: set tool_enablement on the register request instead.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

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