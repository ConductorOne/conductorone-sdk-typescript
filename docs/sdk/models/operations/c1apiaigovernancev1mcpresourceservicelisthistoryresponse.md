# C1ApiAiGovernanceV1MCPResourceServiceListHistoryResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1MCPResourceServiceListHistoryResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAiGovernanceV1MCPResourceServiceListHistoryResponse = {
  contentType: "<value>",
  statusCode: 886034,
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                       | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response content type for this operation                                                                       |
| `statusCode`                                                                                                        | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response status code for this operation                                                                        |
| `rawResponse`                                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                               | :heavy_check_mark:                                                                                                  | Raw HTTP response; suitable for custom response parsing                                                             |
| `mcpResourceServiceListHistoryResponse`                                                                             | [shared.MCPResourceServiceListHistoryResponse](../../../sdk/models/shared/mcpresourceservicelisthistoryresponse.md) | :heavy_minus_sign:                                                                                                  | MCPResourceServiceListHistoryResponse returns MCP resource history entries.                                         |