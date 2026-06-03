# MCPAccessProfileToolBindingServiceGetAccessProfilesForToolsResponse

MCPAccessProfileToolBindingServiceGetAccessProfilesForToolsResponse returns
 access profiles grouped by MCP tool.

## Example Usage

```typescript
import { MCPAccessProfileToolBindingServiceGetAccessProfilesForToolsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPAccessProfileToolBindingServiceGetAccessProfilesForToolsResponse =
  {};
```

## Fields

| Field                                                                                                                                                                                                        | Type                                                                                                                                                                                                         | Required                                                                                                                                                                                                     | Description                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accessProfilesForTools`                                                                                                                                                                                     | [shared.AccessProfilesForTool](../../../sdk/models/shared/accessprofilesfortool.md)[]                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                           | One entry per requested MCP tool. Tools with no bindings are still<br/> included with an empty access_profiles list, so callers can distinguish<br/> "no bindings" from "tool not requested" in the multi-get cache. |