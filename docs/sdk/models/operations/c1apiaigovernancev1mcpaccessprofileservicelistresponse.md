# C1ApiAiGovernanceV1MCPAccessProfileServiceListResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1MCPAccessProfileServiceListResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAiGovernanceV1MCPAccessProfileServiceListResponse = {
  contentType: "<value>",
  statusCode: 320288,
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                   | *string*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response content type for this operation                                                                   |
| `statusCode`                                                                                                    | *number*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response status code for this operation                                                                    |
| `rawResponse`                                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                           | :heavy_check_mark:                                                                                              | Raw HTTP response; suitable for custom response parsing                                                         |
| `mcpAccessProfileServiceListResponse`                                                                           | [shared.MCPAccessProfileServiceListResponse](../../../sdk/models/shared/mcpaccessprofileservicelistresponse.md) | :heavy_minus_sign:                                                                                              | MCPAccessProfileServiceListResponse returns a list of MCP access profiles.                                      |