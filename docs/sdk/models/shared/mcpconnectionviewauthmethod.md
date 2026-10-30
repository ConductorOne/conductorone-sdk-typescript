# MCPConnectionViewAuthMethod

Auth method on the connector. Drives the FE connect-flow choice:
 OAUTH2 → redirect via CreateAuthorizeURL; BEARER_TOKEN / CUSTOM_HEADER
 → form dialog via SubmitUserCredential.

## Example Usage

```typescript
import { MCPConnectionViewAuthMethod } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPConnectionViewAuthMethod = "MCP_SERVER_AUTH_METHOD_BASIC_AUTH";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"MCP_SERVER_AUTH_METHOD_UNSPECIFIED" | "MCP_SERVER_AUTH_METHOD_NONE" | "MCP_SERVER_AUTH_METHOD_BEARER_TOKEN" | "MCP_SERVER_AUTH_METHOD_OAUTH2" | "MCP_SERVER_AUTH_METHOD_CUSTOM_HEADER" | "MCP_SERVER_AUTH_METHOD_AWS_SIGV4" | "MCP_SERVER_AUTH_METHOD_BASIC_AUTH" | Unrecognized<string>
```