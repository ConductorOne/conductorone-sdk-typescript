# C1ApiAiGovernanceV1MCPPromptServiceSearchResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1MCPPromptServiceSearchResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAiGovernanceV1MCPPromptServiceSearchResponse = {
  contentType: "<value>",
  statusCode: 736570,
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                         | *string*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response content type for this operation                                                         |
| `statusCode`                                                                                          | *number*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response status code for this operation                                                          |
| `rawResponse`                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                 | :heavy_check_mark:                                                                                    | Raw HTTP response; suitable for custom response parsing                                               |
| `mcpPromptServiceSearchResponse`                                                                      | [shared.MCPPromptServiceSearchResponse](../../../sdk/models/shared/mcppromptservicesearchresponse.md) | :heavy_minus_sign:                                                                                    | MCPPromptServiceSearchResponse contains matching prompt metadata.                                     |