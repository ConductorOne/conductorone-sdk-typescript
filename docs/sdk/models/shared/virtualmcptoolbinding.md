# VirtualMCPToolBinding

VirtualMCPToolBinding represents one individual tool assigned to a Virtual MCP Server.

## Example Usage

```typescript
import { VirtualMCPToolBinding } from "conductorone-sdk-typescript/sdk/models/shared";

let value: VirtualMCPToolBinding = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `mcpTool`                                                                                     | [shared.MCPToolRef](../../../sdk/models/shared/mcptoolref.md)                                 | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `virtualMcpServerId`                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Immutable identifier of the Virtual MCP Server.                                               |