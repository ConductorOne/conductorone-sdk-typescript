# C1ApiAiGovernanceV1MCPServerServiceUpdateResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1MCPServerServiceUpdateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAiGovernanceV1MCPServerServiceUpdateResponse = {
  contentType: "<value>",
  statusCode: 82690,
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                         | *string*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response content type for this operation                                                         |
| `statusCode`                                                                                          | *number*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response status code for this operation                                                          |
| `rawResponse`                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                 | :heavy_check_mark:                                                                                    | Raw HTTP response; suitable for custom response parsing                                               |
| `mcpServerServiceUpdateResponse`                                                                      | [shared.MCPServerServiceUpdateResponse](../../../sdk/models/shared/mcpserverserviceupdateresponse.md) | :heavy_minus_sign:                                                                                    | MCPServerServiceUpdateResponse returns the updated MCP server.                                        |