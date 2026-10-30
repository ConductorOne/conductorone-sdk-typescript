# C1ApiAiGovernanceV1MCPServerServiceUpdateCredentialsResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1MCPServerServiceUpdateCredentialsResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAiGovernanceV1MCPServerServiceUpdateCredentialsResponse = {
  contentType: "<value>",
  statusCode: 937594,
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                               | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | HTTP response content type for this operation                                                                               |
| `statusCode`                                                                                                                | *number*                                                                                                                    | :heavy_check_mark:                                                                                                          | HTTP response status code for this operation                                                                                |
| `rawResponse`                                                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                       | :heavy_check_mark:                                                                                                          | Raw HTTP response; suitable for custom response parsing                                                                     |
| `mcpServerServiceUpdateCredentialsResponse`                                                                                 | [shared.MCPServerServiceUpdateCredentialsResponse](../../../sdk/models/shared/mcpserverserviceupdatecredentialsresponse.md) | :heavy_minus_sign:                                                                                                          | MCPServerServiceUpdateCredentialsResponse returns the updated MCP server.                                                   |