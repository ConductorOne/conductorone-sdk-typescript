# TokenSharing

Token sharing model in use. Read-only; derived from stored config.
 For rows stored under the legacy SERVICE/PASSTHROUGH OAuth2 modes,
 this is synthesized as SHARED/PER_USER respectively.

## Example Usage

```typescript
import { TokenSharing } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TokenSharing = "MCP_SERVER_TOKEN_SHARING_SHARED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"MCP_SERVER_TOKEN_SHARING_UNSPECIFIED" | "MCP_SERVER_TOKEN_SHARING_SHARED" | "MCP_SERVER_TOKEN_SHARING_PER_USER" | Unrecognized<string>
```