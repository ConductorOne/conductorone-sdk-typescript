# Dependency

Dependency is satisfied when field_name is filled and, if values is set, equals one of them

## Example Usage

```typescript
import { Dependency } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Dependency = {};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `fieldName`                                   | *string*                                      | :heavy_minus_sign:                            | The fieldName field.                          |
| `values`                                      | *string*[]                                    | :heavy_minus_sign:                            | Empty means the field only needs to be filled |