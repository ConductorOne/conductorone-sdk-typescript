# ConnectorCatalogServiceConfigurationSchemaRequest

ConnectorCatalogServiceConfigurationSchemaRequest is the request for retrieving a connector's configuration schema.

## Example Usage

```typescript
import { ConnectorCatalogServiceConfigurationSchemaRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ConnectorCatalogServiceConfigurationSchemaRequest = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `appId`                                                                                 | *string*                                                                                | :heavy_minus_sign:                                                                      | The ID of the app associated with the connector. Optional.                              |
| `catalogId`                                                                             | *string*                                                                                | :heavy_minus_sign:                                                                      | The catalog entry ID identifying the connector type.                                    |
| `connectorId`                                                                           | *string*                                                                                | :heavy_minus_sign:                                                                      | The ID of an existing connector to retrieve its current configuration schema. Optional. |