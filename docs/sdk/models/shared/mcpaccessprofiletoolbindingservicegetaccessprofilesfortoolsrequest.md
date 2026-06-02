# MCPAccessProfileToolBindingServiceGetAccessProfilesForToolsRequest

MCPAccessProfileToolBindingServiceGetAccessProfilesForToolsRequest requests
 the access profiles bound to a batch of MCP tools.

## Example Usage

```typescript
import { MCPAccessProfileToolBindingServiceGetAccessProfilesForToolsRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPAccessProfileToolBindingServiceGetAccessProfilesForToolsRequest =
  {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `mcpToolIds`                                                          | *string*[]                                                            | :heavy_minus_sign:                                                    | MCP tool IDs to look up. Sized to match frontend MultiGet batch size. |