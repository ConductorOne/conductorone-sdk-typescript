# MCPServerServiceSearchWithToolCountResponse

MCPServerServiceSearchWithToolCountResponse returns matching MCP servers with tool counts.

## Example Usage

```typescript
import { MCPServerServiceSearchWithToolCountResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPServerServiceSearchWithToolCountResponse = {};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `list`                                                                                                          | [shared.MCPServerSearchWithToolCountResult](../../../sdk/models/shared/mcpserversearchwithtoolcountresult.md)[] | :heavy_minus_sign:                                                                                              | Matching servers with counts.                                                                                   |
| `nextPageToken`                                                                                                 | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | Token for next page.                                                                                            |