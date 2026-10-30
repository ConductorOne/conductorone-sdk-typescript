# Oauth2Mode

OAuth2 mode in use. Read-only; derived from stored config.

## Example Usage

```typescript
import { Oauth2Mode } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Oauth2Mode = "MCP_SERVER_AUTH_OAUTH2_MODE_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"MCP_SERVER_AUTH_OAUTH2_MODE_UNSPECIFIED" | "MCP_SERVER_AUTH_OAUTH2_MODE_SERVICE" | "MCP_SERVER_AUTH_OAUTH2_MODE_PASSTHROUGH" | "MCP_SERVER_AUTH_OAUTH2_MODE_CLIENT_CREDENTIALS" | "MCP_SERVER_AUTH_OAUTH2_MODE_JWT_BEARER" | "MCP_SERVER_AUTH_OAUTH2_MODE_GOOGLE_SERVICE_ACCOUNT" | "MCP_SERVER_AUTH_OAUTH2_MODE_AUTHORIZATION_CODE" | Unrecognized<string>
```