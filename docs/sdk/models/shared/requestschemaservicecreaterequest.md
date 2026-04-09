# RequestSchemaServiceCreateRequest

The RequestSchemaServiceCreateRequest message.

## Example Usage

```typescript
import { RequestSchemaServiceCreateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: RequestSchemaServiceCreateRequest = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `description`                                                                           | *string*                                                                                | :heavy_minus_sign:                                                                      | The description field.                                                                  |
| `fieldGroups`                                                                           | [shared.FieldGroup](../../../sdk/models/shared/fieldgroup.md)[]                         | :heavy_minus_sign:                                                                      | The fieldGroups field.                                                                  |
| `fieldRelationships`                                                                    | [shared.FieldRelationship](../../../sdk/models/shared/fieldrelationship.md)[]           | :heavy_minus_sign:                                                                      | The fieldRelationships field.                                                           |
| `fields`                                                                                | [shared.FieldInput](../../../sdk/models/shared/fieldinput.md)[]                         | :heavy_minus_sign:                                                                      | The fields field.                                                                       |
| `justificationVisibility`                                                               | [shared.JustificationVisibility](../../../sdk/models/shared/justificationvisibility.md) | :heavy_minus_sign:                                                                      | The justificationVisibility field.                                                      |
| `name`                                                                                  | *string*                                                                                | :heavy_minus_sign:                                                                      | The name field.                                                                         |