# C1ApiAiGovernanceV1MCPServerServiceGetCatalogResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1MCPServerServiceGetCatalogResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAiGovernanceV1MCPServerServiceGetCatalogResponse = {
  contentType: "<value>",
  statusCode: 99525,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                 | *string*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response content type for this operation                                                                 |
| `statusCode`                                                                                                  | *number*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response status code for this operation                                                                  |
| `rawResponse`                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                         | :heavy_check_mark:                                                                                            | Raw HTTP response; suitable for custom response parsing                                                       |
| `mcpServerServiceGetCatalogResponse`                                                                          | [shared.MCPServerServiceGetCatalogResponse](../../../sdk/models/shared/mcpserverservicegetcatalogresponse.md) | :heavy_minus_sign:                                                                                            | MCPServerServiceGetCatalogResponse returns a single catalog entry.                                            |