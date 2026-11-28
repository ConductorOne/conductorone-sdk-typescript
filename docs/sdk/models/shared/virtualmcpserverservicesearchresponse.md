# VirtualMCPServerServiceSearchResponse

VirtualMCPServerServiceSearchResponse contains one page of matching Virtual
 MCP Servers, ordered by display name and then ID.

## Example Usage

```typescript
import { VirtualMCPServerServiceSearchResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: VirtualMCPServerServiceSearchResponse = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `list`                                                                      | [shared.VirtualMCPServer](../../../sdk/models/shared/virtualmcpserver.md)[] | :heavy_minus_sign:                                                          | Matching Virtual MCP Servers in this page.                                  |
| `nextPageToken`                                                             | *string*                                                                    | :heavy_minus_sign:                                                          | Token to retrieve the next page. Empty when there are no more results.      |