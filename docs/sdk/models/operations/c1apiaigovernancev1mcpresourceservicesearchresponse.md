# C1ApiAiGovernanceV1MCPResourceServiceSearchResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1MCPResourceServiceSearchResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAiGovernanceV1MCPResourceServiceSearchResponse = {
  contentType: "<value>",
  statusCode: 478425,
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                             | *string*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response content type for this operation                                                             |
| `statusCode`                                                                                              | *number*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response status code for this operation                                                              |
| `rawResponse`                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                     | :heavy_check_mark:                                                                                        | Raw HTTP response; suitable for custom response parsing                                                   |
| `mcpResourceServiceSearchResponse`                                                                        | [shared.MCPResourceServiceSearchResponse](../../../sdk/models/shared/mcpresourceservicesearchresponse.md) | :heavy_minus_sign:                                                                                        | MCPResourceServiceSearchResponse returns matching MCP resources.                                          |