# MCPServerServiceListConnectionsResponse

MCPServerServiceListConnectionsResponse returns a list of passthrough-mode
 MCP servers with per-user connection status.

## Example Usage

```typescript
import { MCPServerServiceListConnectionsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPServerServiceListConnectionsResponse = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `list`                                                                        | [shared.MCPConnectionView](../../../sdk/models/shared/mcpconnectionview.md)[] | :heavy_minus_sign:                                                            | List of passthrough MCP servers with connection status.                       |
| `nextPageToken`                                                               | *string*                                                                      | :heavy_minus_sign:                                                            | Token for next page.                                                          |