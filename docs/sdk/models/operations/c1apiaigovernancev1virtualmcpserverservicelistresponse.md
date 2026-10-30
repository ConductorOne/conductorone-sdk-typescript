# C1ApiAiGovernanceV1VirtualMCPServerServiceListResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1VirtualMCPServerServiceListResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAiGovernanceV1VirtualMCPServerServiceListResponse = {
  contentType: "<value>",
  statusCode: 918593,
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                   | *string*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response content type for this operation                                                                   |
| `statusCode`                                                                                                    | *number*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response status code for this operation                                                                    |
| `rawResponse`                                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                           | :heavy_check_mark:                                                                                              | Raw HTTP response; suitable for custom response parsing                                                         |
| `virtualMCPServerServiceListResponse`                                                                           | [shared.VirtualMCPServerServiceListResponse](../../../sdk/models/shared/virtualmcpserverservicelistresponse.md) | :heavy_minus_sign:                                                                                              | VirtualMCPServerServiceListResponse contains one page of Virtual MCP Servers.                                   |