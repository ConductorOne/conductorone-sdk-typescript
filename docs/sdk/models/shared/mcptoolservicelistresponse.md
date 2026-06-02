# MCPToolServiceListResponse

MCPToolServiceListResponse returns a list of MCP tools.

## Example Usage

```typescript
import { MCPToolServiceListResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPToolServiceListResponse = {};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `nextPageToken`                                           | *string*                                                  | :heavy_minus_sign:                                        | Token for next page.                                      |
| `tools`                                                   | [shared.MCPTool](../../../sdk/models/shared/mcptool.md)[] | :heavy_minus_sign:                                        | List of MCP tools.                                        |