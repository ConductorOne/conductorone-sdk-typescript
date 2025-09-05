# BoolField

The BoolField message.

This message contains a oneof named view. Only a single field of the following list may be set at a time:
  - checkboxField


This message contains a oneof named _rules. Only a single field of the following list may be set at a time:
  - rules


## Example Usage

```typescript
import { BoolField } from "conductorone-sdk-typescript/sdk/models/shared";

let value: BoolField = {};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `checkboxField`                                                     | [shared.CheckboxField](../../../sdk/models/shared/checkboxfield.md) | :heavy_minus_sign:                                                  | N/A                                                                 |
| `defaultValue`                                                      | *boolean*                                                           | :heavy_minus_sign:                                                  | The defaultValue field.                                             |
| `rules`                                                             | [shared.BoolRules](../../../sdk/models/shared/boolrules.md)         | :heavy_minus_sign:                                                  | N/A                                                                 |