# C1ApiAiGovernanceV1MCPToolServiceUpdateResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1MCPToolServiceUpdateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAiGovernanceV1MCPToolServiceUpdateResponse = {
  contentType: "<value>",
  statusCode: 730187,
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                     | *string*                                                                                          | :heavy_check_mark:                                                                                | HTTP response content type for this operation                                                     |
| `statusCode`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | HTTP response status code for this operation                                                      |
| `rawResponse`                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                             | :heavy_check_mark:                                                                                | Raw HTTP response; suitable for custom response parsing                                           |
| `mcpToolServiceUpdateResponse`                                                                    | [shared.MCPToolServiceUpdateResponse](../../../sdk/models/shared/mcptoolserviceupdateresponse.md) | :heavy_minus_sign:                                                                                | MCPToolServiceUpdateResponse returns the updated MCP tool.                                        |