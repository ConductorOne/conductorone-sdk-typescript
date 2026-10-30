# Transport

Denormalized from DeviceInventoryMcpObservation.transport at detection
 time. Distinguishes a locally-launched (STDIO) product, which has no
 address to connect to, from a remote one, which does.

## Example Usage

```typescript
import { Transport } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Transport = "SHADOW_MCP_TRANSPORT_REMOTE";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"SHADOW_MCP_TRANSPORT_UNSPECIFIED" | "SHADOW_MCP_TRANSPORT_STDIO" | "SHADOW_MCP_TRANSPORT_REMOTE" | Unrecognized<string>
```