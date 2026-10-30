# C1ApiAiGovernanceV1MCPServerServiceResyncToolsResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1MCPServerServiceResyncToolsResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAiGovernanceV1MCPServerServiceResyncToolsResponse = {
  contentType: "<value>",
  statusCode: 175848,
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                   | *string*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response content type for this operation                                                                   |
| `statusCode`                                                                                                    | *number*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response status code for this operation                                                                    |
| `rawResponse`                                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                           | :heavy_check_mark:                                                                                              | Raw HTTP response; suitable for custom response parsing                                                         |
| `mcpServerServiceResyncToolsResponse`                                                                           | [shared.MCPServerServiceResyncToolsResponse](../../../sdk/models/shared/mcpserverserviceresynctoolsresponse.md) | :heavy_minus_sign:                                                                                              | MCPServerServiceResyncToolsResponse is empty on success.                                                        |