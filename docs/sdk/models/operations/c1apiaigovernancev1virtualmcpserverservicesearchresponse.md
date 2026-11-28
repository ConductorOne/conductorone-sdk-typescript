# C1ApiAiGovernanceV1VirtualMCPServerServiceSearchResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1VirtualMCPServerServiceSearchResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAiGovernanceV1VirtualMCPServerServiceSearchResponse = {
  contentType: "<value>",
  statusCode: 693811,
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `contentType`                                                                                                                  | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | HTTP response content type for this operation                                                                                  |
| `statusCode`                                                                                                                   | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | HTTP response status code for this operation                                                                                   |
| `rawResponse`                                                                                                                  | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                          | :heavy_check_mark:                                                                                                             | Raw HTTP response; suitable for custom response parsing                                                                        |
| `virtualMCPServerServiceSearchResponse`                                                                                        | [shared.VirtualMCPServerServiceSearchResponse](../../../sdk/models/shared/virtualmcpserverservicesearchresponse.md)            | :heavy_minus_sign:                                                                                                             | VirtualMCPServerServiceSearchResponse contains one page of matching Virtual<br/> MCP Servers, ordered by display name and then ID. |