# MCPResourceRef

MCPResourceRef is a reference to a specific MCP resource.

## Example Usage

```typescript
import { MCPResourceRef } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPResourceRef = {};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `appId`                                            | *string*                                           | :heavy_minus_sign:                                 | The application the resource belongs to.           |
| `connectorId`                                      | *string*                                           | :heavy_minus_sign:                                 | The connector the resource was discovered through. |
| `id`                                               | *string*                                           | :heavy_minus_sign:                                 | Unique identifier for the MCP resource.            |