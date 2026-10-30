# MCPServerServiceListCatalogResponse

MCPServerServiceListCatalogResponse returns a paginated list of catalog entries.

## Example Usage

```typescript
import { MCPServerServiceListCatalogResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPServerServiceListCatalogResponse = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `list`                                                                                | [shared.MCPServerCatalogEntry](../../../sdk/models/shared/mcpservercatalogentry.md)[] | :heavy_minus_sign:                                                                    | List of catalog entries.                                                              |
| `nextPageToken`                                                                       | *string*                                                                              | :heavy_minus_sign:                                                                    | Token for next page.                                                                  |