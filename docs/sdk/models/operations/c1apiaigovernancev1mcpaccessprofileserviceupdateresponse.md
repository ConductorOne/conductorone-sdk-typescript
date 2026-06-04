# C1ApiAiGovernanceV1MCPAccessProfileServiceUpdateResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1MCPAccessProfileServiceUpdateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAiGovernanceV1MCPAccessProfileServiceUpdateResponse = {
  contentType: "<value>",
  statusCode: 735656,
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                       | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response content type for this operation                                                                       |
| `statusCode`                                                                                                        | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response status code for this operation                                                                        |
| `rawResponse`                                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                               | :heavy_check_mark:                                                                                                  | Raw HTTP response; suitable for custom response parsing                                                             |
| `mcpAccessProfileServiceUpdateResponse`                                                                             | [shared.MCPAccessProfileServiceUpdateResponse](../../../sdk/models/shared/mcpaccessprofileserviceupdateresponse.md) | :heavy_minus_sign:                                                                                                  | MCPAccessProfileServiceUpdateResponse returns the updated MCP access profile.                                       |