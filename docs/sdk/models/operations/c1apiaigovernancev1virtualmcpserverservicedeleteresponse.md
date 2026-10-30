# C1ApiAiGovernanceV1VirtualMCPServerServiceDeleteResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1VirtualMCPServerServiceDeleteResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAiGovernanceV1VirtualMCPServerServiceDeleteResponse = {
  contentType: "<value>",
  statusCode: 945674,
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                       | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response content type for this operation                                                                       |
| `statusCode`                                                                                                        | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response status code for this operation                                                                        |
| `rawResponse`                                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                               | :heavy_check_mark:                                                                                                  | Raw HTTP response; suitable for custom response parsing                                                             |
| `virtualMCPServerServiceDeleteResponse`                                                                             | [shared.VirtualMCPServerServiceDeleteResponse](../../../sdk/models/shared/virtualmcpserverservicedeleteresponse.md) | :heavy_minus_sign:                                                                                                  | VirtualMCPServerServiceDeleteResponse confirms deletion.                                                            |