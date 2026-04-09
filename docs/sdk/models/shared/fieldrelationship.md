# FieldRelationship

FieldRelationships can be used during form validation, or they can represent
 information that is necessary to when it comes to visually rendering the form

This message contains a oneof named kind. Only a single field of the following list may be set at a time:
  - requiredTogether
  - atLeastOne
  - mutuallyExclusive
  - dependentOn


## Example Usage

```typescript
import { FieldRelationship } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FieldRelationship = {};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `atLeastOne`                                                                                                         | [shared.AtLeastOne](../../../sdk/models/shared/atleastone.md)                                                        | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `dependentOn`                                                                                                        | [shared.DependentOn](../../../sdk/models/shared/dependenton.md)                                                      | :heavy_minus_sign:                                                                                                   | DependentOn means the fields in field_names are only valid if all fields<br/> in dependency_field_names are also present |
| `fieldNames`                                                                                                         | *string*[]                                                                                                           | :heavy_minus_sign:                                                                                                   | The names of the fields that share this relationship                                                                 |
| `mutuallyExclusive`                                                                                                  | [shared.MutuallyExclusive](../../../sdk/models/shared/mutuallyexclusive.md)                                          | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `requiredTogether`                                                                                                   | [shared.RequiredTogether](../../../sdk/models/shared/requiredtogether.md)                                            | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |