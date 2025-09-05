# StringField

The StringField message.

This message contains a oneof named view. Only a single field of the following list may be set at a time:
  - textField
  - passwordField


This message contains a oneof named _rules. Only a single field of the following list may be set at a time:
  - rules


## Example Usage

```typescript
import { StringField } from "conductorone-sdk-typescript/sdk/models/shared";

let value: StringField = {};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `defaultValue`                                                      | *string*                                                            | :heavy_minus_sign:                                                  | The defaultValue field.                                             |
| `passwordField`                                                     | [shared.PasswordField](../../../sdk/models/shared/passwordfield.md) | :heavy_minus_sign:                                                  | N/A                                                                 |
| `placeholder`                                                       | *string*                                                            | :heavy_minus_sign:                                                  | The placeholder field.                                              |
| `rules`                                                             | [shared.StringRules](../../../sdk/models/shared/stringrules.md)     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `textField`                                                         | [shared.TextField](../../../sdk/models/shared/textfield.md)         | :heavy_minus_sign:                                                  | N/A                                                                 |