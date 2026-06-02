# MCPAccessProfileServiceUpdateRequest

MCPAccessProfileServiceUpdateRequest updates an existing MCP access profile.

## Example Usage

```typescript
import { MCPAccessProfileServiceUpdateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPAccessProfileServiceUpdateRequest = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `mcpAccessProfile`                                                        | [shared.MCPAccessProfile](../../../sdk/models/shared/mcpaccessprofile.md) | :heavy_minus_sign:                                                        | MCPAccessProfile represents an admin-curated grouping of MCP tools.       |
| `updateMask`                                                              | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |