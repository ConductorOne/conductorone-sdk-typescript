# VirtualMCPServerServiceListResponse

VirtualMCPServerServiceListResponse contains one page of Virtual MCP Servers.

## Example Usage

```typescript
import { VirtualMCPServerServiceListResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: VirtualMCPServerServiceListResponse = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `list`                                                                      | [shared.VirtualMCPServer](../../../sdk/models/shared/virtualmcpserver.md)[] | :heavy_minus_sign:                                                          | Virtual MCP Servers in this page.                                           |
| `nextPageToken`                                                             | *string*                                                                    | :heavy_minus_sign:                                                          | Token to retrieve the next page. Empty when there are no more results.      |