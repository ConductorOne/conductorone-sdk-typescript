# MCPServerCatalogConfigSchema

MCPServerCatalogConfigSchema describes extra configuration fields beyond auth.

## Example Usage

```typescript
import { MCPServerCatalogConfigSchema } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPServerCatalogConfigSchema = {};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `fields`                                                                                          | [shared.MCPServerCatalogConfigField](../../../sdk/models/shared/mcpservercatalogconfigfield.md)[] | :heavy_minus_sign:                                                                                | The fields field.                                                                                 |