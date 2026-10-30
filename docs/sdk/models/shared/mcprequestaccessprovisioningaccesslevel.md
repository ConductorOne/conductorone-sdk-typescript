# MCPRequestAccessProvisioningAccessLevel

The system toolset selected for requestable access, independently of automatic access.
 Unspecified inherits the legacy shared access_level, then defaults to Read tools.
 Access-profile associations remain stored on each toolset.

## Example Usage

```typescript
import { MCPRequestAccessProvisioningAccessLevel } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPRequestAccessProvisioningAccessLevel = "MCP_SYSTEM_TOOLSET_READ";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"MCP_SYSTEM_TOOLSET_UNSPECIFIED" | "MCP_SYSTEM_TOOLSET_READ" | "MCP_SYSTEM_TOOLSET_ALL_APPROVED" | "MCP_SYSTEM_TOOLSET_CUSTOM" | Unrecognized<string>
```