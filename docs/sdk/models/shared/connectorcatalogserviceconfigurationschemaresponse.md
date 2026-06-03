# ConnectorCatalogServiceConfigurationSchemaResponse

ConnectorCatalogServiceConfigurationSchemaResponse is the response containing the connector's configuration schema.

## Example Usage

```typescript
import { ConnectorCatalogServiceConfigurationSchemaResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ConnectorCatalogServiceConfigurationSchemaResponse = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `requestSchemaForm`                                                         | [shared.RequestSchemaForm](../../../sdk/models/shared/requestschemaform.md) | :heavy_minus_sign:                                                          | A form is a collection of fields to be filled out by a user                 |
| `configSchema`                                                              | [shared.ConfigSchema](../../../sdk/models/shared/configschema.md)           | :heavy_minus_sign:                                                          | The ConfigSchema message.                                                   |