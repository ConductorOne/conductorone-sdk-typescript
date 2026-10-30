# MCPToolServiceListHistoryResponse

MCPToolServiceListHistoryResponse returns MCP tool history entries.

## Example Usage

```typescript
import { MCPToolServiceListHistoryResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPToolServiceListHistoryResponse = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `list`                                                                            | [shared.MCPToolHistoryEntry](../../../sdk/models/shared/mcptoolhistoryentry.md)[] | :heavy_minus_sign:                                                                | The page of history entries, newest first.                                        |
| `nextPageToken`                                                                   | *string*                                                                          | :heavy_minus_sign:                                                                | Pagination token for the next page, or empty if there are no more results.        |