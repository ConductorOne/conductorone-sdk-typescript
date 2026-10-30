# C1ApiAiGovernanceV1MCPServerServiceListConnectionsResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1MCPServerServiceListConnectionsResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAiGovernanceV1MCPServerServiceListConnectionsResponse = {
  contentType: "<value>",
  statusCode: 812127,
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `contentType`                                                                                                            | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | HTTP response content type for this operation                                                                            |
| `statusCode`                                                                                                             | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | HTTP response status code for this operation                                                                             |
| `rawResponse`                                                                                                            | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                    | :heavy_check_mark:                                                                                                       | Raw HTTP response; suitable for custom response parsing                                                                  |
| `mcpServerServiceListConnectionsResponse`                                                                                | [shared.MCPServerServiceListConnectionsResponse](../../../sdk/models/shared/mcpserverservicelistconnectionsresponse.md)  | :heavy_minus_sign:                                                                                                       | MCPServerServiceListConnectionsResponse returns a list of passthrough-mode<br/> MCP servers with per-user connection status. |