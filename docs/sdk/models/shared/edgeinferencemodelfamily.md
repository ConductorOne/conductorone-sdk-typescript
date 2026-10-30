# EdgeInferenceModelFamily

EdgeInferenceModelFamily groups registered models, e.g. "Claude Opus".

## Example Usage

```typescript
import { EdgeInferenceModelFamily } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeInferenceModelFamily = {};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `family`                                                                                        | *string*                                                                                        | :heavy_minus_sign:                                                                              | Family name; models with no family are grouped under their own display name.                    |
| `models`                                                                                        | [shared.EdgeInferenceRegistryModel](../../../sdk/models/shared/edgeinferenceregistrymodel.md)[] | :heavy_minus_sign:                                                                              | The models field.                                                                               |