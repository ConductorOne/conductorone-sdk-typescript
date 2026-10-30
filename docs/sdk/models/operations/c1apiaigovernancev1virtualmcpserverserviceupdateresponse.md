# C1ApiAiGovernanceV1VirtualMCPServerServiceUpdateResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1VirtualMCPServerServiceUpdateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAiGovernanceV1VirtualMCPServerServiceUpdateResponse = {
  contentType: "<value>",
  statusCode: 593262,
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                       | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response content type for this operation                                                                       |
| `statusCode`                                                                                                        | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response status code for this operation                                                                        |
| `rawResponse`                                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                               | :heavy_check_mark:                                                                                                  | Raw HTTP response; suitable for custom response parsing                                                             |
| `virtualMCPServerServiceUpdateResponse`                                                                             | [shared.VirtualMCPServerServiceUpdateResponse](../../../sdk/models/shared/virtualmcpserverserviceupdateresponse.md) | :heavy_minus_sign:                                                                                                  | VirtualMCPServerServiceUpdateResponse contains the updated Virtual MCP Server.                                      |