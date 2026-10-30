# ~~DefaultAuthMethod~~

Deprecated: read auth_modes instead.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import { DefaultAuthMethod } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DefaultAuthMethod = "MCP_SERVER_AUTH_METHOD_AWS_SIGV4";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"MCP_SERVER_AUTH_METHOD_UNSPECIFIED" | "MCP_SERVER_AUTH_METHOD_NONE" | "MCP_SERVER_AUTH_METHOD_BEARER_TOKEN" | "MCP_SERVER_AUTH_METHOD_OAUTH2" | "MCP_SERVER_AUTH_METHOD_CUSTOM_HEADER" | "MCP_SERVER_AUTH_METHOD_AWS_SIGV4" | "MCP_SERVER_AUTH_METHOD_BASIC_AUTH" | Unrecognized<string>
```