# C1ApiAiGovernanceV1MCPServerServiceRegisterResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1MCPServerServiceRegisterResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAiGovernanceV1MCPServerServiceRegisterResponse = {
  contentType: "<value>",
  statusCode: 594455,
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                             | *string*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response content type for this operation                                                             |
| `statusCode`                                                                                              | *number*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response status code for this operation                                                              |
| `rawResponse`                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                     | :heavy_check_mark:                                                                                        | Raw HTTP response; suitable for custom response parsing                                                   |
| `mcpServerServiceRegisterResponse`                                                                        | [shared.MCPServerServiceRegisterResponse](../../../sdk/models/shared/mcpserverserviceregisterresponse.md) | :heavy_minus_sign:                                                                                        | MCPServerServiceRegisterResponse returns the newly created MCP server.                                    |