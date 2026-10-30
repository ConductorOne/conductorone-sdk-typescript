# AccessLevel

Legacy shared level used when a nested access level is unspecified.
 Unspecified defaults to read-only access for provisioning.

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