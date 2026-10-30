# TemplateParam

TemplateParam declares a value supplied at instantiation. The UI renders one
 form field per param.

## Example Usage

```typescript
import { TemplateParam } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TemplateParam = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `description`                                                               | *string*                                                                    | :heavy_minus_sign:                                                          | The description field.                                                      |
| `displayName`                                                               | *string*                                                                    | :heavy_minus_sign:                                                          | The displayName field.                                                      |
| `key`                                                                       | *string*                                                                    | :heavy_minus_sign:                                                          | The key field.                                                              |
| `required`                                                                  | *boolean*                                                                   | :heavy_minus_sign:                                                          | The required field.                                                         |
| `type`                                                                      | [shared.TemplateParamType](../../../sdk/models/shared/templateparamtype.md) | :heavy_minus_sign:                                                          | The type field.                                                             |