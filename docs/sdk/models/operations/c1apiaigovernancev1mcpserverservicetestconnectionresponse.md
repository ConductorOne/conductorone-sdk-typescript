# C1ApiAiGovernanceV1MCPServerServiceTestConnectionResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1MCPServerServiceTestConnectionResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAiGovernanceV1MCPServerServiceTestConnectionResponse = {
  contentType: "<value>",
  statusCode: 414058,
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                         | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response content type for this operation                                                                         |
| `statusCode`                                                                                                          | *number*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response status code for this operation                                                                          |
| `rawResponse`                                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                 | :heavy_check_mark:                                                                                                    | Raw HTTP response; suitable for custom response parsing                                                               |
| `mcpServerServiceTestConnectionResponse`                                                                              | [shared.MCPServerServiceTestConnectionResponse](../../../sdk/models/shared/mcpserverservicetestconnectionresponse.md) | :heavy_minus_sign:                                                                                                    | Successful response                                                                                                   |