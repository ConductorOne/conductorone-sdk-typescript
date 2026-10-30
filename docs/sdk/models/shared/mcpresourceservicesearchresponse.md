# MCPResourceServiceSearchResponse

MCPResourceServiceSearchResponse returns matching MCP resources.

## Example Usage

```typescript
import { MCPResourceServiceSearchResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPResourceServiceSearchResponse = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `list`                                                            | [shared.MCPResource](../../../sdk/models/shared/mcpresource.md)[] | :heavy_minus_sign:                                                | Matching MCP resources.                                           |
| `nextPageToken`                                                   | *string*                                                          | :heavy_minus_sign:                                                | Token for next page.                                              |