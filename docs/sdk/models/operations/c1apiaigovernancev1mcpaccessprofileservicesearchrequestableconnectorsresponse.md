# C1ApiAiGovernanceV1MCPAccessProfileServiceSearchRequestableConnectorsResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1MCPAccessProfileServiceSearchRequestableConnectorsResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiAiGovernanceV1MCPAccessProfileServiceSearchRequestableConnectorsResponse =
    {
      contentType: "<value>",
      statusCode: 300636,
    };
```

## Fields

| Field                                                                                                                                                         | Type                                                                                                                                                          | Required                                                                                                                                                      | Description                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                                                 | *string*                                                                                                                                                      | :heavy_check_mark:                                                                                                                                            | HTTP response content type for this operation                                                                                                                 |
| `statusCode`                                                                                                                                                  | *number*                                                                                                                                                      | :heavy_check_mark:                                                                                                                                            | HTTP response status code for this operation                                                                                                                  |
| `rawResponse`                                                                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                                         | :heavy_check_mark:                                                                                                                                            | Raw HTTP response; suitable for custom response parsing                                                                                                       |
| `mcpAccessProfileServiceSearchRequestableConnectorsResponse`                                                                                                  | [shared.MCPAccessProfileServiceSearchRequestableConnectorsResponse](../../../sdk/models/shared/mcpaccessprofileservicesearchrequestableconnectorsresponse.md) | :heavy_minus_sign:                                                                                                                                            | MCPAccessProfileServiceSearchRequestableConnectorsResponse returns one page<br/> of card-ready requestable-connector entries.                                 |