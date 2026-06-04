# C1ApiAiGovernanceV1MCPToolServiceListResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1MCPToolServiceListResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAiGovernanceV1MCPToolServiceListResponse = {
  contentType: "<value>",
  statusCode: 510473,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `contentType`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | HTTP response content type for this operation                                                 |
| `statusCode`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | HTTP response status code for this operation                                                  |
| `rawResponse`                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                         | :heavy_check_mark:                                                                            | Raw HTTP response; suitable for custom response parsing                                       |
| `mcpToolServiceListResponse`                                                                  | [shared.MCPToolServiceListResponse](../../../sdk/models/shared/mcptoolservicelistresponse.md) | :heavy_minus_sign:                                                                            | MCPToolServiceListResponse returns a list of MCP tools.                                       |