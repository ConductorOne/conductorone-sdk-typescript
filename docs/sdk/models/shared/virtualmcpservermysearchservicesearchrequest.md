# VirtualMCPServerMySearchServiceSearchRequest

VirtualMCPServerMySearchServiceSearchRequest searches Virtual MCP Servers
 the caller's own principal has a live `use` grant for. Only user principals
 may call this API.

## Example Usage

```typescript
import { VirtualMCPServerMySearchServiceSearchRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: VirtualMCPServerMySearchServiceSearchRequest = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `pageSize`                                                        | *number*                                                          | :heavy_minus_sign:                                                | Maximum number of matching servers to return. The maximum is 100. |
| `pageToken`                                                       | *string*                                                          | :heavy_minus_sign:                                                | Opaque token that continues the PostgreSQL-backed search.         |