# MCPAccessProfileRef

MCPAccessProfileRef is a lightweight reference to an MCP access profile,
 used for websocket notifications and search filter refs.

## Example Usage

```typescript
import { MCPAccessProfileRef } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPAccessProfileRef = {};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `appId`                | *string*               | :heavy_minus_sign:     | The appId field.       |
| `connectorId`          | *string*               | :heavy_minus_sign:     | The connectorId field. |
| `id`                   | *string*               | :heavy_minus_sign:     | The id field.          |