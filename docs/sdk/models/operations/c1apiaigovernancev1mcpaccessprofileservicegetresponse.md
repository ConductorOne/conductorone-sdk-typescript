# C1ApiAiGovernanceV1MCPAccessProfileServiceGetResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1MCPAccessProfileServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAiGovernanceV1MCPAccessProfileServiceGetResponse = {
  contentType: "<value>",
  statusCode: 225861,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                 | *string*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response content type for this operation                                                                 |
| `statusCode`                                                                                                  | *number*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response status code for this operation                                                                  |
| `rawResponse`                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                         | :heavy_check_mark:                                                                                            | Raw HTTP response; suitable for custom response parsing                                                       |
| `mcpAccessProfileServiceGetResponse`                                                                          | [shared.MCPAccessProfileServiceGetResponse](../../../sdk/models/shared/mcpaccessprofileservicegetresponse.md) | :heavy_minus_sign:                                                                                            | MCPAccessProfileServiceGetResponse returns a single MCP access profile.                                       |