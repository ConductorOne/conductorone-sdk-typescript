# C1ApiAiGovernanceV1MCPToolServiceSearchResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1MCPToolServiceSearchResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAiGovernanceV1MCPToolServiceSearchResponse = {
  contentType: "<value>",
  statusCode: 330053,
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                     | *string*                                                                                          | :heavy_check_mark:                                                                                | HTTP response content type for this operation                                                     |
| `statusCode`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | HTTP response status code for this operation                                                      |
| `rawResponse`                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                             | :heavy_check_mark:                                                                                | Raw HTTP response; suitable for custom response parsing                                           |
| `mcpToolServiceSearchResponse`                                                                    | [shared.MCPToolServiceSearchResponse](../../../sdk/models/shared/mcptoolservicesearchresponse.md) | :heavy_minus_sign:                                                                                | MCPToolServiceSearchResponse returns matching MCP tools.                                          |