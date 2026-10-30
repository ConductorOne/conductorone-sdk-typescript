# GetTenantDefaultsResponse

GetTenantDefaultsResponse contains tenant defaults used by
 legacy MCP servers.

## Example Usage

```typescript
import { GetTenantDefaultsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GetTenantDefaultsResponse = {};
```

## Fields

| Field                                                                                                                                                   | Type                                                                                                                                                    | Required                                                                                                                                                | Description                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `requireToolApproval`                                                                                                                                   | *boolean*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                      | Whether newly discovered tools require approval on MCP servers without a<br/> saved registration access level, unless overridden by the per-server setting. |