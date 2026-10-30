# MCPServerCatalogAuthModeClientIdMode

How the OAuth2 client_id is acquired for this mode. Set by the impl bundle
 and shown read-only on the form. authorization_code grant only.

## Example Usage

```typescript
import { MCPServerCatalogAuthModeClientIdMode } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPServerCatalogAuthModeClientIdMode =
  "MCP_SERVER_CATALOG_CLIENT_ID_MODE_DCR";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"MCP_SERVER_CATALOG_CLIENT_ID_MODE_UNSPECIFIED" | "MCP_SERVER_CATALOG_CLIENT_ID_MODE_MANUAL" | "MCP_SERVER_CATALOG_CLIENT_ID_MODE_DCR" | "MCP_SERVER_CATALOG_CLIENT_ID_MODE_CIMD" | Unrecognized<string>
```