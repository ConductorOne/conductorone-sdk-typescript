# AuthMethod

Authentication method in use. Read-only; derived from stored config.

## Example Usage

```typescript
import { AuthMethod } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AuthMethod = "MCP_SERVER_AUTH_METHOD_CUSTOM_HEADER";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"MCP_SERVER_AUTH_METHOD_UNSPECIFIED" | "MCP_SERVER_AUTH_METHOD_NONE" | "MCP_SERVER_AUTH_METHOD_BEARER_TOKEN" | "MCP_SERVER_AUTH_METHOD_OAUTH2" | "MCP_SERVER_AUTH_METHOD_CUSTOM_HEADER" | "MCP_SERVER_AUTH_METHOD_AWS_SIGV4" | "MCP_SERVER_AUTH_METHOD_BASIC_AUTH" | Unrecognized<string>
```