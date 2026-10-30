# MCPAccessProfileServiceSearchAccessProfilesResponse

MCPAccessProfileServiceSearchAccessProfilesResponse returns one page of
 tenant-wide MCP access profiles.

## Example Usage

```typescript
import { MCPAccessProfileServiceSearchAccessProfilesResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPAccessProfileServiceSearchAccessProfilesResponse = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `nextPageToken`                                                             | *string*                                                                    | :heavy_minus_sign:                                                          | Token for next page.                                                        |
| `profiles`                                                                  | [shared.MCPAccessProfile](../../../sdk/models/shared/mcpaccessprofile.md)[] | :heavy_minus_sign:                                                          | The page of matching MCP access profiles.                                   |