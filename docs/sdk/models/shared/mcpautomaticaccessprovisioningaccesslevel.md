# MCPAutomaticAccessProvisioningAccessLevel

The system toolset granted through automatic access, independently of requestable access.
 Unspecified inherits the legacy shared access_level, then defaults to Read tools.

## Example Usage

```typescript
import { MCPAutomaticAccessProvisioningAccessLevel } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPAutomaticAccessProvisioningAccessLevel =
  "MCP_SYSTEM_TOOLSET_READ";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"MCP_SYSTEM_TOOLSET_UNSPECIFIED" | "MCP_SYSTEM_TOOLSET_READ" | "MCP_SYSTEM_TOOLSET_ALL_APPROVED" | "MCP_SYSTEM_TOOLSET_CUSTOM" | Unrecognized<string>
```