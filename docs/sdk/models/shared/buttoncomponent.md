# ButtonComponent

ButtonComponent triggers actions.

## Example Usage

```typescript
import { ButtonComponent } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ButtonComponent = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `action`                                                                  | [shared.A2UIAction](../../../sdk/models/shared/a2uiaction.md)             | :heavy_minus_sign:                                                        | N/A                                                                       |
| `checks`                                                                  | [shared.ValidationCheck](../../../sdk/models/shared/validationcheck.md)[] | :heavy_minus_sign:                                                        | The checks field.                                                         |
| `disabled`                                                                | [shared.DynamicBool](../../../sdk/models/shared/dynamicbool.md)           | :heavy_minus_sign:                                                        | N/A                                                                       |
| `label`                                                                   | [shared.DynamicString](../../../sdk/models/shared/dynamicstring.md)       | :heavy_minus_sign:                                                        | N/A                                                                       |
| `variant`                                                                 | [shared.Variant](../../../sdk/models/shared/variant.md)                   | :heavy_minus_sign:                                                        | The variant field.                                                        |