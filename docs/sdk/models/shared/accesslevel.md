# ~~AccessLevel~~

Deprecated: set the automatic and request access levels and tool_enablement instead.
 Ignored on write; returned for registrations saved before it was deprecated.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import { AccessLevel } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessLevel = "MCP_SYSTEM_TOOLSET_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"MCP_SYSTEM_TOOLSET_UNSPECIFIED" | "MCP_SYSTEM_TOOLSET_READ" | "MCP_SYSTEM_TOOLSET_ALL_APPROVED" | "MCP_SYSTEM_TOOLSET_CUSTOM" | Unrecognized<string>
```