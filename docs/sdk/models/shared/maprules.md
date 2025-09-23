# MapRules

MapRules describe the constraints applied to `map` values

## Example Usage

```typescript
import { MapRules } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MapRules = {};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `ignoreEmpty`                                                                                                     | *boolean*                                                                                                         | :heavy_minus_sign:                                                                                                | IgnoreEmpty specifies that the validation rules of this field should be<br/> evaluated only if the field is not empty |
| `keys`                                                                                                            | [shared.FieldRules](../../../sdk/models/shared/fieldrules.md)                                                     | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `maxPairs`                                                                                                        | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | MaxPairs specifies that this field must have the specified number of<br/> KVs at a maximum                        |
| `minPairs`                                                                                                        | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | MinPairs specifies that this field must have the specified number of<br/> KVs at a minimum                        |
| `noSparse`                                                                                                        | *boolean*                                                                                                         | :heavy_minus_sign:                                                                                                | NoSparse specifies values in this field cannot be unset. This only<br/> applies to map's with message value types. |
| `values`                                                                                                          | [shared.FieldRules](../../../sdk/models/shared/fieldrules.md)                                                     | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |