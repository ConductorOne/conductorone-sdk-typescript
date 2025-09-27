# ConnectorCatalogServiceConfigurationSchemaResponse

The ConnectorCatalogServiceConfigurationSchemaResponse message.

## Example Usage

```typescript
import { ConnectorCatalogServiceConfigurationSchemaResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ConnectorCatalogServiceConfigurationSchemaResponse = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `form`                                                            | [shared.FormInput](../../../sdk/models/shared/forminput.md)       | :heavy_minus_sign:                                                | A form is a collection of fields to be filled out by a user       |
| `configSchema`                                                    | [shared.ConfigSchema](../../../sdk/models/shared/configschema.md) | :heavy_minus_sign:                                                | The ConfigSchema message.                                         |