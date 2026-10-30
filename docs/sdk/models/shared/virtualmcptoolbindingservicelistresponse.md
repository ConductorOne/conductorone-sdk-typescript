# VirtualMCPToolBindingServiceListResponse

VirtualMCPToolBindingServiceListResponse contains one page of tool assignments.

## Example Usage

```typescript
import { VirtualMCPToolBindingServiceListResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: VirtualMCPToolBindingServiceListResponse = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `bindings`                                                                            | [shared.VirtualMCPToolBinding](../../../sdk/models/shared/virtualmcptoolbinding.md)[] | :heavy_minus_sign:                                                                    | Individual tool assignments on the Virtual MCP Server.                                |
| `nextPageToken`                                                                       | *string*                                                                              | :heavy_minus_sign:                                                                    | Token to retrieve the next page. Empty when there are no more results.                |