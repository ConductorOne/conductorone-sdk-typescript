# C1ApiAiGovernanceV1MCPResourceServiceListResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1MCPResourceServiceListResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAiGovernanceV1MCPResourceServiceListResponse = {
  contentType: "<value>",
  statusCode: 234397,
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                         | *string*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response content type for this operation                                                         |
| `statusCode`                                                                                          | *number*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response status code for this operation                                                          |
| `rawResponse`                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                 | :heavy_check_mark:                                                                                    | Raw HTTP response; suitable for custom response parsing                                               |
| `mcpResourceServiceListResponse`                                                                      | [shared.MCPResourceServiceListResponse](../../../sdk/models/shared/mcpresourceservicelistresponse.md) | :heavy_minus_sign:                                                                                    | MCPResourceServiceListResponse returns a list of MCP resources.                                       |