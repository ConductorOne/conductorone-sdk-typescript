# VirtualMCPToolsetBindingServiceListResponse

VirtualMCPToolsetBindingServiceListResponse contains one page of Toolset assignments.

## Example Usage

```typescript
import { VirtualMCPToolsetBindingServiceListResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: VirtualMCPToolsetBindingServiceListResponse = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `bindings`                                                                                  | [shared.VirtualMCPToolsetBinding](../../../sdk/models/shared/virtualmcptoolsetbinding.md)[] | :heavy_minus_sign:                                                                          | Toolset assignments on the Virtual MCP Server.                                              |
| `nextPageToken`                                                                             | *string*                                                                                    | :heavy_minus_sign:                                                                          | Token to retrieve the next page. Empty when there are no more results.                      |