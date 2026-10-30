# VirtualMCPToolsetBindingServiceDeleteBindingsRequest

VirtualMCPToolsetBindingServiceDeleteBindingsRequest removes Toolsets from one Virtual MCP Server.

## Example Usage

```typescript
import { VirtualMCPToolsetBindingServiceDeleteBindingsRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: VirtualMCPToolsetBindingServiceDeleteBindingsRequest = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `mcpAccessProfiles`                                                               | [shared.MCPAccessProfileRef](../../../sdk/models/shared/mcpaccessprofileref.md)[] | :heavy_minus_sign:                                                                | Complete Toolset references to unassign. Duplicate tuples are ignored.            |