# C1ApiAiGovernanceV1VirtualMCPToolBindingServiceListResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1VirtualMCPToolBindingServiceListResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAiGovernanceV1VirtualMCPToolBindingServiceListResponse = {
  contentType: "<value>",
  statusCode: 228845,
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                             | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | HTTP response content type for this operation                                                                             |
| `statusCode`                                                                                                              | *number*                                                                                                                  | :heavy_check_mark:                                                                                                        | HTTP response status code for this operation                                                                              |
| `rawResponse`                                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                     | :heavy_check_mark:                                                                                                        | Raw HTTP response; suitable for custom response parsing                                                                   |
| `virtualMCPToolBindingServiceListResponse`                                                                                | [shared.VirtualMCPToolBindingServiceListResponse](../../../sdk/models/shared/virtualmcptoolbindingservicelistresponse.md) | :heavy_minus_sign:                                                                                                        | VirtualMCPToolBindingServiceListResponse contains one page of tool assignments.                                           |