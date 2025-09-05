# Int64Field

The Int64Field message.

This message contains a oneof named view. Only a single field of the following list may be set at a time:
  - numberField


This message contains a oneof named _default_value. Only a single field of the following list may be set at a time:
  - defaultValue


This message contains a oneof named _rules. Only a single field of the following list may be set at a time:
  - rules


## Example Usage

```typescript
import { Int64Field } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Int64Field = {};
```

## Fields

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `defaultValue`                                                                                                                                    | *number*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | The defaultValue field.<br/>This field is part of the `_default_value` oneof.<br/>See the documentation for `c1.api.form.v1.Int64Field` for more details. |
| `numberField`                                                                                                                                     | [shared.NumberField](../../../sdk/models/shared/numberfield.md)                                                                                   | :heavy_minus_sign:                                                                                                                                | N/A                                                                                                                                               |
| `placeholder`                                                                                                                                     | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | The placeholder field.                                                                                                                            |
| `rules`                                                                                                                                           | [shared.Int64Rules](../../../sdk/models/shared/int64rules.md)                                                                                     | :heavy_minus_sign:                                                                                                                                | N/A                                                                                                                                               |