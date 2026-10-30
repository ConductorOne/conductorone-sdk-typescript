# C1ApiAiGovernanceV1VirtualMCPServerMySearchServiceSearchResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1VirtualMCPServerMySearchServiceSearchResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAiGovernanceV1VirtualMCPServerMySearchServiceSearchResponse = {
  contentType: "<value>",
  statusCode: 976260,
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                       | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | HTTP response content type for this operation                                                                                       |
| `statusCode`                                                                                                                        | *number*                                                                                                                            | :heavy_check_mark:                                                                                                                  | HTTP response status code for this operation                                                                                        |
| `rawResponse`                                                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                               | :heavy_check_mark:                                                                                                                  | Raw HTTP response; suitable for custom response parsing                                                                             |
| `virtualMCPServerMySearchServiceSearchResponse`                                                                                     | [shared.VirtualMCPServerMySearchServiceSearchResponse](../../../sdk/models/shared/virtualmcpservermysearchservicesearchresponse.md) | :heavy_minus_sign:                                                                                                                  | VirtualMCPServerMySearchServiceSearchResponse contains one page of the<br/> caller's currently available Virtual MCP Servers.       |