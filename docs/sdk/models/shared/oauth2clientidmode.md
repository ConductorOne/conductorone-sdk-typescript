# Oauth2ClientIdMode

How the OAuth2 client_id was acquired (manual / DCR / CIMD). Read-only;
 derived from stored config. Empty for non-authorization_code servers.

## Example Usage

```typescript
import { Oauth2ClientIdMode } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Oauth2ClientIdMode =
  "MCP_SERVER_AUTH_OAUTH2_CLIENT_ID_MODE_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"MCP_SERVER_AUTH_OAUTH2_CLIENT_ID_MODE_UNSPECIFIED" | "MCP_SERVER_AUTH_OAUTH2_CLIENT_ID_MODE_DCR" | "MCP_SERVER_AUTH_OAUTH2_CLIENT_ID_MODE_CIMD" | Unrecognized<string>
```