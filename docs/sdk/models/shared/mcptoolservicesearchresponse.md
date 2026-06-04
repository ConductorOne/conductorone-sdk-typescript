# MCPToolServiceSearchResponse

MCPToolServiceSearchResponse returns matching MCP tools.

## Example Usage

```typescript
import { MCPToolServiceSearchResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPToolServiceSearchResponse = {};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `list`                                                    | [shared.MCPTool](../../../sdk/models/shared/mcptool.md)[] | :heavy_minus_sign:                                        | Matching MCP tools.                                       |
| `nextPageToken`                                           | *string*                                                  | :heavy_minus_sign:                                        | Token for next page.                                      |