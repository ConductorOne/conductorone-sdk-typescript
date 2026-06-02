# MCPToolServiceUpdateRequest

MCPToolServiceUpdateRequest updates an existing MCP tool.

## Example Usage

```typescript
import { MCPToolServiceUpdateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPToolServiceUpdateRequest = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `mcpTool`                                                                         | [shared.MCPToolInput](../../../sdk/models/shared/mcptoolinput.md)                 | :heavy_minus_sign:                                                                | MCPTool represents metadata about individual tools discovered from an MCP server. |
| `updateMask`                                                                      | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |