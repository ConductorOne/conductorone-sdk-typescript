# MCPToolRef

MCPToolRef is a reference to a specific MCP tool.

## Example Usage

```typescript
import { MCPToolRef } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPToolRef = {};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `appId`                                        | *string*                                       | :heavy_minus_sign:                             | The application the tool belongs to.           |
| `connectorId`                                  | *string*                                       | :heavy_minus_sign:                             | The connector the tool was discovered through. |
| `id`                                           | *string*                                       | :heavy_minus_sign:                             | Unique identifier for the MCP tool.            |