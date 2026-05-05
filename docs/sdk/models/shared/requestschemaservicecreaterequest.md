# RequestSchemaServiceCreateRequest

The request message for creating a new request schema.

## Example Usage

```typescript
import { RequestSchemaServiceCreateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: RequestSchemaServiceCreateRequest = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `description`                                                                           | *string*                                                                                | :heavy_minus_sign:                                                                      | An optional description of the request schema's purpose.                                |
| `fieldGroups`                                                                           | [shared.FormFieldGroup](../../../sdk/models/shared/formfieldgroup.md)[]                 | :heavy_minus_sign:                                                                      | Logical groupings of fields for display purposes.                                       |
| `fieldRelationships`                                                                    | [shared.FieldRelationship](../../../sdk/models/shared/fieldrelationship.md)[]           | :heavy_minus_sign:                                                                      | Dependencies between fields that control conditional visibility or validation.          |
| `fields`                                                                                | [shared.FormField](../../../sdk/models/shared/formfield.md)[]                           | :heavy_minus_sign:                                                                      | The form fields that users must fill out when requesting access.                        |
| `justificationVisibility`                                                               | [shared.JustificationVisibility](../../../sdk/models/shared/justificationvisibility.md) | :heavy_minus_sign:                                                                      | Controls whether the justification field is shown or hidden on the request form.        |
| `name`                                                                                  | *string*                                                                                | :heavy_minus_sign:                                                                      | The human-readable name for the request schema.                                         |