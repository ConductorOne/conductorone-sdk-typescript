# VirtualMCPToolsetBinding

VirtualMCPToolsetBinding represents one Toolset assigned to a Virtual MCP Server.

## Example Usage

```typescript
import { VirtualMCPToolsetBinding } from "conductorone-sdk-typescript/sdk/models/shared";

let value: VirtualMCPToolsetBinding = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `mcpAccessProfile`                                                                            | [shared.MCPAccessProfileRef](../../../sdk/models/shared/mcpaccessprofileref.md)               | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `virtualMcpServerId`                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Immutable identifier of the Virtual MCP Server.                                               |