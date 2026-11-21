# InitialState

Initial lifecycle state. Omitted or ACTIVE creates an active server.
 DISABLED creates a server that denies connections until it is enabled.

## Example Usage

```typescript
import { InitialState } from "conductorone-sdk-typescript/sdk/models/shared";

let value: InitialState = "VIRTUAL_MCP_SERVER_STATE_ACTIVE";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"VIRTUAL_MCP_SERVER_STATE_UNSPECIFIED" | "VIRTUAL_MCP_SERVER_STATE_ACTIVE" | "VIRTUAL_MCP_SERVER_STATE_DISABLED" | Unrecognized<string>
```