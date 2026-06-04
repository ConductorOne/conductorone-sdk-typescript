# C1ApiAiGovernanceV1MCPAccessProfileServiceCreateResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1MCPAccessProfileServiceCreateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAiGovernanceV1MCPAccessProfileServiceCreateResponse = {
  contentType: "<value>",
  statusCode: 250136,
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                       | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response content type for this operation                                                                       |
| `statusCode`                                                                                                        | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response status code for this operation                                                                        |
| `rawResponse`                                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                               | :heavy_check_mark:                                                                                                  | Raw HTTP response; suitable for custom response parsing                                                             |
| `mcpAccessProfileServiceCreateResponse`                                                                             | [shared.MCPAccessProfileServiceCreateResponse](../../../sdk/models/shared/mcpaccessprofileservicecreateresponse.md) | :heavy_minus_sign:                                                                                                  | MCPAccessProfileServiceCreateResponse returns the created MCP access profile.                                       |