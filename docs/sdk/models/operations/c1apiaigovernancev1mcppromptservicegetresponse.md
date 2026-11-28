# C1ApiAiGovernanceV1MCPPromptServiceGetResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1MCPPromptServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAiGovernanceV1MCPPromptServiceGetResponse = {
  contentType: "<value>",
  statusCode: 992319,
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `contentType`                                                                                   | *string*                                                                                        | :heavy_check_mark:                                                                              | HTTP response content type for this operation                                                   |
| `statusCode`                                                                                    | *number*                                                                                        | :heavy_check_mark:                                                                              | HTTP response status code for this operation                                                    |
| `rawResponse`                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                           | :heavy_check_mark:                                                                              | Raw HTTP response; suitable for custom response parsing                                         |
| `mcpPromptServiceGetResponse`                                                                   | [shared.MCPPromptServiceGetResponse](../../../sdk/models/shared/mcppromptservicegetresponse.md) | :heavy_minus_sign:                                                                              | MCPPromptServiceGetResponse contains stored prompt metadata.                                    |