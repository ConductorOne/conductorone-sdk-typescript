# DefaultVisibility

System-managed default visibility from MCP config (set during discovery).

## Example Usage

```typescript
import { DefaultVisibility } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DefaultVisibility = "TOOL_VISIBILITY_BYPASSED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"TOOL_VISIBILITY_UNSPECIFIED" | "TOOL_VISIBILITY_FEATURED" | "TOOL_VISIBILITY_AVAILABLE" | "TOOL_VISIBILITY_BYPASSED" | Unrecognized<string>
```