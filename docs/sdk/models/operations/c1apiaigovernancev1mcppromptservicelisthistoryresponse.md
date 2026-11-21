# C1ApiAiGovernanceV1MCPPromptServiceListHistoryResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1MCPPromptServiceListHistoryResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAiGovernanceV1MCPPromptServiceListHistoryResponse = {
  contentType: "<value>",
  statusCode: 297434,
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                   | *string*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response content type for this operation                                                                   |
| `statusCode`                                                                                                    | *number*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response status code for this operation                                                                    |
| `rawResponse`                                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                           | :heavy_check_mark:                                                                                              | Raw HTTP response; suitable for custom response parsing                                                         |
| `mcpPromptServiceListHistoryResponse`                                                                           | [shared.MCPPromptServiceListHistoryResponse](../../../sdk/models/shared/mcppromptservicelisthistoryresponse.md) | :heavy_minus_sign:                                                                                              | MCPPromptServiceListHistoryResponse contains one page of prompt history.                                        |