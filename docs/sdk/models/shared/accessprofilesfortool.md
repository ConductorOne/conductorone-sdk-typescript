# AccessProfilesForTool

AccessProfilesForTool groups access profiles by the MCP tool they are bound to.

## Example Usage

```typescript
import { AccessProfilesForTool } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessProfilesForTool = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `accessProfiles`                                                            | [shared.MCPAccessProfile](../../../sdk/models/shared/mcpaccessprofile.md)[] | :heavy_minus_sign:                                                          | Access profiles bound to this tool.                                         |
| `mcpToolId`                                                                 | *string*                                                                    | :heavy_minus_sign:                                                          | The MCP tool identifier.                                                    |