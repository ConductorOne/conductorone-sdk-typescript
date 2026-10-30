# C1ApiAiGovernanceV1VirtualMCPToolsetBindingServiceListResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1VirtualMCPToolsetBindingServiceListResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAiGovernanceV1VirtualMCPToolsetBindingServiceListResponse = {
  contentType: "<value>",
  statusCode: 631982,
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                   | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | HTTP response content type for this operation                                                                                   |
| `statusCode`                                                                                                                    | *number*                                                                                                                        | :heavy_check_mark:                                                                                                              | HTTP response status code for this operation                                                                                    |
| `rawResponse`                                                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                           | :heavy_check_mark:                                                                                                              | Raw HTTP response; suitable for custom response parsing                                                                         |
| `virtualMCPToolsetBindingServiceListResponse`                                                                                   | [shared.VirtualMCPToolsetBindingServiceListResponse](../../../sdk/models/shared/virtualmcptoolsetbindingservicelistresponse.md) | :heavy_minus_sign:                                                                                                              | VirtualMCPToolsetBindingServiceListResponse contains one page of Toolset assignments.                                           |