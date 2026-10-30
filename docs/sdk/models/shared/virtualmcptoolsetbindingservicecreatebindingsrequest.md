# VirtualMCPToolsetBindingServiceCreateBindingsRequest

VirtualMCPToolsetBindingServiceCreateBindingsRequest assigns Toolsets to one Virtual MCP Server.

## Example Usage

```typescript
import { VirtualMCPToolsetBindingServiceCreateBindingsRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: VirtualMCPToolsetBindingServiceCreateBindingsRequest = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `mcpAccessProfiles`                                                               | [shared.MCPAccessProfileRef](../../../sdk/models/shared/mcpaccessprofileref.md)[] | :heavy_minus_sign:                                                                | Complete Toolset references to assign. Duplicate tuples are ignored.              |