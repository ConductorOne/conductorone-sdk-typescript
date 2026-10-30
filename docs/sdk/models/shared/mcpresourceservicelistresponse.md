# MCPResourceServiceListResponse

MCPResourceServiceListResponse returns a list of MCP resources.

## Example Usage

```typescript
import { MCPResourceServiceListResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPResourceServiceListResponse = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `nextPageToken`                                                   | *string*                                                          | :heavy_minus_sign:                                                | Token for next page.                                              |
| `resources`                                                       | [shared.MCPResource](../../../sdk/models/shared/mcpresource.md)[] | :heavy_minus_sign:                                                | List of MCP resources.                                            |