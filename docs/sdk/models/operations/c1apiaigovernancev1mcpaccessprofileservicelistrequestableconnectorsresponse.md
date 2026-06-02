# C1ApiAiGovernanceV1MCPAccessProfileServiceListRequestableConnectorsResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1MCPAccessProfileServiceListRequestableConnectorsResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiAiGovernanceV1MCPAccessProfileServiceListRequestableConnectorsResponse =
    {
      contentType: "<value>",
      statusCode: 111376,
    };
```

## Fields

| Field                                                                                                                                                     | Type                                                                                                                                                      | Required                                                                                                                                                  | Description                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                                             | *string*                                                                                                                                                  | :heavy_check_mark:                                                                                                                                        | HTTP response content type for this operation                                                                                                             |
| `statusCode`                                                                                                                                              | *number*                                                                                                                                                  | :heavy_check_mark:                                                                                                                                        | HTTP response status code for this operation                                                                                                              |
| `rawResponse`                                                                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                                     | :heavy_check_mark:                                                                                                                                        | Raw HTTP response; suitable for custom response parsing                                                                                                   |
| `mcpAccessProfileServiceListRequestableConnectorsResponse`                                                                                                | [shared.MCPAccessProfileServiceListRequestableConnectorsResponse](../../../sdk/models/shared/mcpaccessprofileservicelistrequestableconnectorsresponse.md) | :heavy_minus_sign:                                                                                                                                        | MCPAccessProfileServiceListRequestableConnectorsResponse returns connector references<br/> that have requestable MCP access profiles.                     |