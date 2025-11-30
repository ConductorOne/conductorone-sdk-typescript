# FormInput

A form is a collection of fields to be filled out by a user

## Example Usage

```typescript
import { FormInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FormInput = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `description`                                                                 | *string*                                                                      | :heavy_minus_sign:                                                            | The description field.                                                        |
| `displayName`                                                                 | *string*                                                                      | :heavy_minus_sign:                                                            | The displayName field.                                                        |
| `fieldGroups`                                                                 | [shared.FieldGroup](../../../sdk/models/shared/fieldgroup.md)[]               | :heavy_minus_sign:                                                            | The fieldGroups field.                                                        |
| `fieldRelationships`                                                          | [shared.FieldRelationship](../../../sdk/models/shared/fieldrelationship.md)[] | :heavy_minus_sign:                                                            | The fieldRelationships field.                                                 |
| `fields`                                                                      | [shared.FieldInput](../../../sdk/models/shared/fieldinput.md)[]               | :heavy_minus_sign:                                                            | The fields field.                                                             |
| `id`                                                                          | *string*                                                                      | :heavy_minus_sign:                                                            | The id field.                                                                 |