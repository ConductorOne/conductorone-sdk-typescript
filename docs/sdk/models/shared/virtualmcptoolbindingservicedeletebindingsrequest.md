# VirtualMCPToolBindingServiceDeleteBindingsRequest

VirtualMCPToolBindingServiceDeleteBindingsRequest removes individual tools from one Virtual MCP Server.

## Example Usage

```typescript
import { VirtualMCPToolBindingServiceDeleteBindingsRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: VirtualMCPToolBindingServiceDeleteBindingsRequest = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `mcpTools`                                                              | [shared.MCPToolRef](../../../sdk/models/shared/mcptoolref.md)[]         | :heavy_minus_sign:                                                      | Complete MCP tool references to unassign. Duplicate tuples are ignored. |