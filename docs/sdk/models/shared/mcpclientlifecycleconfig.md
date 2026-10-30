# MCPClientLifecycleConfig

MCPClientLifecycleConfig controls how long inactive MCP clients remain
 visible, when their access is closed, and when their records are removed.
 Durations are measured from the client's last activity. Any duration left at
 zero disables that transition.

## Example Usage

```typescript
import { MCPClientLifecycleConfig } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPClientLifecycleConfig = {};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `inactivityCloseAfter` | *string*               | :heavy_minus_sign:     | N/A                    |
| `inactivityHideAfter`  | *string*               | :heavy_minus_sign:     | N/A                    |
| `retentionDeleteAfter` | *string*               | :heavy_minus_sign:     | N/A                    |