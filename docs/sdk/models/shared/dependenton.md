# DependentOn

DependentOn means the fields in field_names are only valid if all fields
 in dependency_field_names are also present

## Example Usage

```typescript
import { DependentOn } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DependentOn = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `dependencyFieldNames`                                                  | *string*[]                                                              | :heavy_minus_sign:                                                      | The fields that must be present for the primary field_names to be valid |