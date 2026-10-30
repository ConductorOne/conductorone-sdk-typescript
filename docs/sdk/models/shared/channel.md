# Channel

Release channel; higher values are less stable.

## Example Usage

```typescript
import { Channel } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Channel = "MCP_SERVER_CATALOG_CHANNEL_STABLE";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"MCP_SERVER_CATALOG_CHANNEL_UNSPECIFIED" | "MCP_SERVER_CATALOG_CHANNEL_STABLE" | "MCP_SERVER_CATALOG_CHANNEL_BETA" | "MCP_SERVER_CATALOG_CHANNEL_ALPHA" | Unrecognized<string>
```