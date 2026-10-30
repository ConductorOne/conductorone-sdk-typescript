# MCPServerExternalConfigTokenSharing

Token sharing model. SHARED = admin authorizes once; PER_USER = each user
 authenticates independently. PER_USER is supported for OAuth2
 authorization_code, bearer_token, custom_header, and basic_auth. Defaults
 to SHARED at runtime.

## Example Usage

```typescript
import { MCPServerExternalConfigTokenSharing } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPServerExternalConfigTokenSharing =
  "MCP_SERVER_TOKEN_SHARING_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"MCP_SERVER_TOKEN_SHARING_UNSPECIFIED" | "MCP_SERVER_TOKEN_SHARING_SHARED" | "MCP_SERVER_TOKEN_SHARING_PER_USER" | Unrecognized<string>
```