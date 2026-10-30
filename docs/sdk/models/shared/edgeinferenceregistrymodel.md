# EdgeInferenceRegistryModel

EdgeInferenceRegistryModel is a model C1 has registered for use.

## Example Usage

```typescript
import { EdgeInferenceRegistryModel } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeInferenceRegistryModel = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `contextWindowTokens`                                                                       | *number*                                                                                    | :heavy_minus_sign:                                                                          | Zero when unknown.                                                                          |
| `displayName`                                                                               | *string*                                                                                    | :heavy_minus_sign:                                                                          | The displayName field.                                                                      |
| `modelId`                                                                                   | *string*                                                                                    | :heavy_minus_sign:                                                                          | Registry model id, written to EdgeInferenceRoute.registry_model_id.                         |
| `routeId`                                                                                   | *string*                                                                                    | :heavy_minus_sign:                                                                          | Suggested route id: the model's name in route id form.                                      |
| `serveOptions`                                                                              | [shared.EdgeInferenceServeOption](../../../sdk/models/shared/edgeinferenceserveoption.md)[] | :heavy_minus_sign:                                                                          | Ways to serve the model, in C1's preferred order.                                           |