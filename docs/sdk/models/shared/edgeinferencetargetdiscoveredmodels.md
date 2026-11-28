# EdgeInferenceTargetDiscoveredModels

EdgeInferenceTargetDiscoveredModels is the last discovery result for one saved inference target.

## Example Usage

```typescript
import { EdgeInferenceTargetDiscoveredModels } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeInferenceTargetDiscoveredModels = {};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `appId`                                                                                             | *string*                                                                                            | :heavy_minus_sign:                                                                                  | The appId field.                                                                                    |
| `discoveredAt`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `edgeId`                                                                                            | *string*                                                                                            | :heavy_minus_sign:                                                                                  | The edgeId field.                                                                                   |
| `error`                                                                                             | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Set when the last attempt failed; models then keeps the last successful answer, if any.             |
| `models`                                                                                            | [shared.EdgeInferenceDiscoveredModel](../../../sdk/models/shared/edgeinferencediscoveredmodel.md)[] | :heavy_minus_sign:                                                                                  | The models field.                                                                                   |
| `routeId`                                                                                           | *string*                                                                                            | :heavy_minus_sign:                                                                                  | The routeId field.                                                                                  |
| `targetId`                                                                                          | *string*                                                                                            | :heavy_minus_sign:                                                                                  | The targetId field.                                                                                 |