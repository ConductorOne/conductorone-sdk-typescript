# CohortFilterAttribute

CohortFilterAttribute describes one stable filter key independently of its
 materialized values.

## Example Usage

```typescript
import { CohortFilterAttribute } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CohortFilterAttribute = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `attribute`                                                                                 | *string*                                                                                    | :heavy_minus_sign:                                                                          | The attribute field.                                                                        |
| `displayName`                                                                               | *string*                                                                                    | :heavy_minus_sign:                                                                          | The displayName field.                                                                      |
| `kind`                                                                                      | [shared.CohortFilterAttributeKind](../../../sdk/models/shared/cohortfilterattributekind.md) | :heavy_minus_sign:                                                                          | The kind field.                                                                             |