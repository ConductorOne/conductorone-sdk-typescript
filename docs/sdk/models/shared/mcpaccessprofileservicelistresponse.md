# MCPAccessProfileServiceListResponse

MCPAccessProfileServiceListResponse returns a list of MCP access profiles.

## Example Usage

```typescript
import { MCPAccessProfileServiceListResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPAccessProfileServiceListResponse = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `nextPageToken`                                                             | *string*                                                                    | :heavy_minus_sign:                                                          | Token for next page.                                                        |
| `profiles`                                                                  | [shared.MCPAccessProfile](../../../sdk/models/shared/mcpaccessprofile.md)[] | :heavy_minus_sign:                                                          | List of MCP access profiles.                                                |