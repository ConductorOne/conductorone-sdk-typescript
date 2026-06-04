# C1ApiAiGovernanceV1MCPToolServiceListHistoryResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1MCPToolServiceListHistoryResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAiGovernanceV1MCPToolServiceListHistoryResponse = {
  contentType: "<value>",
  statusCode: 521192,
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                               | *string*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response content type for this operation                                                               |
| `statusCode`                                                                                                | *number*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response status code for this operation                                                                |
| `rawResponse`                                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                       | :heavy_check_mark:                                                                                          | Raw HTTP response; suitable for custom response parsing                                                     |
| `mcpToolServiceListHistoryResponse`                                                                         | [shared.MCPToolServiceListHistoryResponse](../../../sdk/models/shared/mcptoolservicelisthistoryresponse.md) | :heavy_minus_sign:                                                                                          | MCPToolServiceListHistoryResponse returns MCP tool history entries.                                         |