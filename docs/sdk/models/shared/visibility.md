# Visibility

Admin-settable visibility override (how this tool is surfaced to users).

## Example Usage

```typescript
import { Visibility } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Visibility = "TOOL_VISIBILITY_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"TOOL_VISIBILITY_UNSPECIFIED" | "TOOL_VISIBILITY_FEATURED" | "TOOL_VISIBILITY_AVAILABLE" | "TOOL_VISIBILITY_BYPASSED" | Unrecognized<string>
```