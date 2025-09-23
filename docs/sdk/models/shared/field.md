# Field

A field is a single input meant to collect a piece of data from a user

This message contains a oneof named type. Only a single field of the following list may be set at a time:
  - stringField
  - boolField
  - stringSliceField
  - int64Field


## Example Usage

```typescript
import { Field } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Field = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `boolField`                                                               | [shared.BoolField](../../../sdk/models/shared/boolfield.md)               | :heavy_minus_sign:                                                        | N/A                                                                       |
| `description`                                                             | *string*                                                                  | :heavy_minus_sign:                                                        | The description field.                                                    |
| `displayName`                                                             | *string*                                                                  | :heavy_minus_sign:                                                        | The displayName field.                                                    |
| `int64Field`                                                              | [shared.Int64Field](../../../sdk/models/shared/int64field.md)             | :heavy_minus_sign:                                                        | N/A                                                                       |
| `name`                                                                    | *string*                                                                  | :heavy_minus_sign:                                                        | The name field.                                                           |
| `stringField`                                                             | [shared.StringField](../../../sdk/models/shared/stringfield.md)           | :heavy_minus_sign:                                                        | N/A                                                                       |
| `stringSliceField`                                                        | [shared.StringSliceField](../../../sdk/models/shared/stringslicefield.md) | :heavy_minus_sign:                                                        | N/A                                                                       |