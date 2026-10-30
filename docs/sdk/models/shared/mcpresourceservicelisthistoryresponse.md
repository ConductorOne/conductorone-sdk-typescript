# MCPResourceServiceListHistoryResponse

MCPResourceServiceListHistoryResponse returns MCP resource history entries.

## Example Usage

```typescript
import { MCPResourceServiceListHistoryResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPResourceServiceListHistoryResponse = {};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `list`                                                                                    | [shared.MCPResourceHistoryEntry](../../../sdk/models/shared/mcpresourcehistoryentry.md)[] | :heavy_minus_sign:                                                                        | The page of history entries, newest first.                                                |
| `nextPageToken`                                                                           | *string*                                                                                  | :heavy_minus_sign:                                                                        | Pagination token for the next page, or empty if there are no more results.                |