# C1ApiAiGovernanceV1MCPServerServiceListResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1MCPServerServiceListResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAiGovernanceV1MCPServerServiceListResponse = {
  contentType: "<value>",
  statusCode: 545397,
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                     | *string*                                                                                          | :heavy_check_mark:                                                                                | HTTP response content type for this operation                                                     |
| `statusCode`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | HTTP response status code for this operation                                                      |
| `rawResponse`                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                             | :heavy_check_mark:                                                                                | Raw HTTP response; suitable for custom response parsing                                           |
| `mcpServerServiceListResponse`                                                                    | [shared.MCPServerServiceListResponse](../../../sdk/models/shared/mcpserverservicelistresponse.md) | :heavy_minus_sign:                                                                                | MCPServerServiceListResponse returns a paginated list of MCP servers.                             |