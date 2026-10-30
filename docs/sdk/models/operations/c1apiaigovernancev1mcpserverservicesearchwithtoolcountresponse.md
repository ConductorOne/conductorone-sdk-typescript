# C1ApiAiGovernanceV1MCPServerServiceSearchWithToolCountResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1MCPServerServiceSearchWithToolCountResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAiGovernanceV1MCPServerServiceSearchWithToolCountResponse = {
  contentType: "<value>",
  statusCode: 105055,
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                   | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | HTTP response content type for this operation                                                                                   |
| `statusCode`                                                                                                                    | *number*                                                                                                                        | :heavy_check_mark:                                                                                                              | HTTP response status code for this operation                                                                                    |
| `rawResponse`                                                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                           | :heavy_check_mark:                                                                                                              | Raw HTTP response; suitable for custom response parsing                                                                         |
| `mcpServerServiceSearchWithToolCountResponse`                                                                                   | [shared.MCPServerServiceSearchWithToolCountResponse](../../../sdk/models/shared/mcpserverservicesearchwithtoolcountresponse.md) | :heavy_minus_sign:                                                                                                              | MCPServerServiceSearchWithToolCountResponse returns matching MCP servers with tool counts.                                      |