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
| `list`                                                                            | [shared.MCPToolHistoryEntry](../../../sdk/models/shared/mcptoolhistoryentry.md)[] | :heavy_minus_sign:                                                                | The list field.                                                                   |
| `nextPageToken`                                                                   | *string*                                                                          | :heavy_minus_sign:                                                                | The nextPageToken field.                                                          |