# C1ApiAiGovernanceV1MCPToolServiceGetResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1MCPToolServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAiGovernanceV1MCPToolServiceGetResponse = {
  contentType: "<value>",
  statusCode: 110870,
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `contentType`                                                                               | *string*                                                                                    | :heavy_check_mark:                                                                          | HTTP response content type for this operation                                               |
| `statusCode`                                                                                | *number*                                                                                    | :heavy_check_mark:                                                                          | HTTP response status code for this operation                                                |
| `rawResponse`                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                       | :heavy_check_mark:                                                                          | Raw HTTP response; suitable for custom response parsing                                     |
| `mcpToolServiceGetResponse`                                                                 | [shared.MCPToolServiceGetResponse](../../../sdk/models/shared/mcptoolservicegetresponse.md) | :heavy_minus_sign:                                                                          | MCPToolServiceGetResponse returns a single MCP tool.                                        |