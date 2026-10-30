# MCPServerHostedConfigTokenSharing

Token sharing model for the configured auth method. SHARED means the
 admin authorizes once and the credential applies to every tool call;
 PER_USER means each user authenticates independently. PER_USER is
 supported for OAuth2 authorization-code, bearer_token, custom_header,
 and basic_auth methods; sending PER_USER alongside any other auth
 method is rejected with InvalidArgument.

## Example Usage

```typescript
import { MCPServerHostedConfigTokenSharing } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPServerHostedConfigTokenSharing =
  "MCP_SERVER_TOKEN_SHARING_SHARED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"MCP_SERVER_TOKEN_SHARING_UNSPECIFIED" | "MCP_SERVER_TOKEN_SHARING_SHARED" | "MCP_SERVER_TOKEN_SHARING_PER_USER" | Unrecognized<string>
```