# C1ApiAiGovernanceV1MCPServerServiceGetResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1MCPServerServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAiGovernanceV1MCPServerServiceGetResponse = {
  contentType: "<value>",
  statusCode: 595918,
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `contentType`                                                                                   | *string*                                                                                        | :heavy_check_mark:                                                                              | HTTP response content type for this operation                                                   |
| `statusCode`                                                                                    | *number*                                                                                        | :heavy_check_mark:                                                                              | HTTP response status code for this operation                                                    |
| `rawResponse`                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                           | :heavy_check_mark:                                                                              | Raw HTTP response; suitable for custom response parsing                                         |
| `mcpServerServiceGetResponse`                                                                   | [shared.MCPServerServiceGetResponse](../../../sdk/models/shared/mcpserverservicegetresponse.md) | :heavy_minus_sign:                                                                              | MCPServerServiceGetResponse returns a single MCP server.                                        |