# C1ApiAiGovernanceV1VirtualMCPToolBindingServiceCreateBindingsResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1VirtualMCPToolBindingServiceCreateBindingsResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiAiGovernanceV1VirtualMCPToolBindingServiceCreateBindingsResponse = {
    contentType: "<value>",
    statusCode: 946815,
  };
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                                 | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | HTTP response content type for this operation                                                                                                 |
| `statusCode`                                                                                                                                  | *number*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | HTTP response status code for this operation                                                                                                  |
| `rawResponse`                                                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                         | :heavy_check_mark:                                                                                                                            | Raw HTTP response; suitable for custom response parsing                                                                                       |
| `virtualMCPToolBindingServiceCreateBindingsResponse`                                                                                          | [shared.VirtualMCPToolBindingServiceCreateBindingsResponse](../../../sdk/models/shared/virtualmcptoolbindingservicecreatebindingsresponse.md) | :heavy_minus_sign:                                                                                                                            | VirtualMCPToolBindingServiceCreateBindingsResponse contains the resulting assignments.                                                        |