# VirtualMCPToolBindingServiceCreateBindingsRequest

VirtualMCPToolBindingServiceCreateBindingsRequest assigns individual tools to one Virtual MCP Server.

## Example Usage

```typescript
import { VirtualMCPToolBindingServiceCreateBindingsRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: VirtualMCPToolBindingServiceCreateBindingsRequest = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `mcpTools`                                                            | [shared.MCPToolRef](../../../sdk/models/shared/mcptoolref.md)[]       | :heavy_minus_sign:                                                    | Complete MCP tool references to assign. Duplicate tuples are ignored. |