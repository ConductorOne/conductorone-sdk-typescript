# VirtualMCPServerMySearchServiceSearchResponse

VirtualMCPServerMySearchServiceSearchResponse contains one page of the
 caller's currently available Virtual MCP Servers.

## Example Usage

```typescript
import { VirtualMCPServerMySearchServiceSearchResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: VirtualMCPServerMySearchServiceSearchResponse = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `list`                                                                          | [shared.MyVirtualMCPServer](../../../sdk/models/shared/myvirtualmcpserver.md)[] | :heavy_minus_sign:                                                              | Available Virtual MCP Servers in this page.                                     |
| `nextPageToken`                                                                 | *string*                                                                        | :heavy_minus_sign:                                                              | Opaque token that continues the PostgreSQL-backed search.                       |