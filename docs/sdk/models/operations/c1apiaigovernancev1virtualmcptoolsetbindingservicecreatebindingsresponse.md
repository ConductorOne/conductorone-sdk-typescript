# C1ApiAiGovernanceV1VirtualMCPToolsetBindingServiceCreateBindingsResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1VirtualMCPToolsetBindingServiceCreateBindingsResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiAiGovernanceV1VirtualMCPToolsetBindingServiceCreateBindingsResponse = {
    contentType: "<value>",
    statusCode: 660335,
  };
```

## Fields

| Field                                                                                                                                               | Type                                                                                                                                                | Required                                                                                                                                            | Description                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                                       | *string*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | HTTP response content type for this operation                                                                                                       |
| `statusCode`                                                                                                                                        | *number*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | HTTP response status code for this operation                                                                                                        |
| `rawResponse`                                                                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                               | :heavy_check_mark:                                                                                                                                  | Raw HTTP response; suitable for custom response parsing                                                                                             |
| `virtualMCPToolsetBindingServiceCreateBindingsResponse`                                                                                             | [shared.VirtualMCPToolsetBindingServiceCreateBindingsResponse](../../../sdk/models/shared/virtualmcptoolsetbindingservicecreatebindingsresponse.md) | :heavy_minus_sign:                                                                                                                                  | VirtualMCPToolsetBindingServiceCreateBindingsResponse contains the resulting assignments.                                                           |