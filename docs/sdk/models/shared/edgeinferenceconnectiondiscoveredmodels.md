# EdgeInferenceConnectionDiscoveredModels

EdgeInferenceConnectionDiscoveredModels is the last discovery result for one saved provider connection.

## Example Usage

```typescript
import { EdgeInferenceConnectionDiscoveredModels } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeInferenceConnectionDiscoveredModels = {};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `appId`                                                                                             | *string*                                                                                            | :heavy_minus_sign:                                                                                  | The appId field.                                                                                    |
| `connectionId`                                                                                      | *string*                                                                                            | :heavy_minus_sign:                                                                                  | The connection's catalog provider id (EdgeInferenceConnection.catalog_entry_id).                    |
| `discoveredAt`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `edgeId`                                                                                            | *string*                                                                                            | :heavy_minus_sign:                                                                                  | The edgeId field.                                                                                   |
| `error`                                                                                             | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Set when the last attempt failed; models then keeps the last successful answer, if any.             |
| `models`                                                                                            | [shared.EdgeInferenceDiscoveredModel](../../../sdk/models/shared/edgeinferencediscoveredmodel.md)[] | :heavy_minus_sign:                                                                                  | The models field.                                                                                   |