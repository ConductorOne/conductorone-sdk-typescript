# MCPServerServiceListResponse

MCPServerServiceListResponse returns a paginated list of MCP servers.

## Example Usage

```typescript
import { MCPServerServiceListResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPServerServiceListResponse = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `list`                                                                | [shared.MCPServerView](../../../sdk/models/shared/mcpserverview.md)[] | :heavy_minus_sign:                                                    | List of MCP servers.                                                  |
| `nextPageToken`                                                       | *string*                                                              | :heavy_minus_sign:                                                    | Token for next page.                                                  |