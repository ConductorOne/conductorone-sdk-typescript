# C1ApiIntegrationConnectorV1ConnectorCatalogServiceConfigurationSchemaResponse

## Example Usage

```typescript
import { C1ApiIntegrationConnectorV1ConnectorCatalogServiceConfigurationSchemaResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiIntegrationConnectorV1ConnectorCatalogServiceConfigurationSchemaResponse =
    {
      contentType: "<value>",
      statusCode: 821025,
    };
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                                 | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | HTTP response content type for this operation                                                                                                 |
| `statusCode`                                                                                                                                  | *number*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | HTTP response status code for this operation                                                                                                  |
| `rawResponse`                                                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                         | :heavy_check_mark:                                                                                                                            | Raw HTTP response; suitable for custom response parsing                                                                                       |
| `connectorCatalogServiceConfigurationSchemaResponse`                                                                                          | [shared.ConnectorCatalogServiceConfigurationSchemaResponse](../../../sdk/models/shared/connectorcatalogserviceconfigurationschemaresponse.md) | :heavy_minus_sign:                                                                                                                            | Successful response                                                                                                                           |