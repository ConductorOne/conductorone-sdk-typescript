# ClientIdMode

How the client_id is acquired for authorization_code mode. When DCR (or
 CIMD), client_id / client_secret are not required on input — the gateway
 registers itself with the authorization server during Register and injects
 the result. UNSPECIFIED means manual (admin-entered client_id).

## Example Usage

```typescript
import { ClientIdMode } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ClientIdMode = "MCP_SERVER_AUTH_OAUTH2_CLIENT_ID_MODE_DCR";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"MCP_SERVER_AUTH_OAUTH2_CLIENT_ID_MODE_UNSPECIFIED" | "MCP_SERVER_AUTH_OAUTH2_CLIENT_ID_MODE_DCR" | "MCP_SERVER_AUTH_OAUTH2_CLIENT_ID_MODE_CIMD" | Unrecognized<string>
```