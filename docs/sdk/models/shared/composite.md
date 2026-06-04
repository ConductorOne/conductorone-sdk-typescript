# Composite

Composite import IDs combine values from multiple component fields
 per the declared `format`.

## Example Usage

```typescript
import { Composite } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Composite = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `fields`                                                                | [shared.CompositeField](../../../sdk/models/shared/compositefield.md)[] | :heavy_minus_sign:                                                      | Component fields, in the order they participate in the import<br/> ID.  |
| `format`                                                                | [shared.CompositeFormat](../../../sdk/models/shared/compositeformat.md) | :heavy_minus_sign:                                                      | Wire format the provider expects. Defaults to<br/> FORMAT_JSON_OBJECT.  |