# C1ApiAiGovernanceV1VirtualMCPServerServiceSummaryResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1VirtualMCPServerServiceSummaryResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAiGovernanceV1VirtualMCPServerServiceSummaryResponse = {
  contentType: "<value>",
  statusCode: 619512,
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                         | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response content type for this operation                                                                         |
| `statusCode`                                                                                                          | *number*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response status code for this operation                                                                          |
| `rawResponse`                                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                 | :heavy_check_mark:                                                                                                    | Raw HTTP response; suitable for custom response parsing                                                               |
| `virtualMCPServerServiceSummaryResponse`                                                                              | [shared.VirtualMCPServerServiceSummaryResponse](../../../sdk/models/shared/virtualmcpserverservicesummaryresponse.md) | :heavy_minus_sign:                                                                                                    | VirtualMCPServerServiceSummaryResponse contains tenant-wide counts for<br/> Virtual MCP Servers that are not deleted. |