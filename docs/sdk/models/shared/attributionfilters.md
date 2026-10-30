# AttributionFilters

AttributionFilters narrows settled usage before grouping. All predicates are
 exact matches and combine with AND; values within one list combine with OR.

## Example Usage

```typescript
import { AttributionFilters } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AttributionFilters = {};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `appIds`                                                                                                      | *string*[]                                                                                                    | :heavy_minus_sign:                                                                                            | Application IDs to include.                                                                                   |
| `departmentAbsent`                                                                                            | *boolean*                                                                                                     | :heavy_minus_sign:                                                                                            | Select only calls whose spend-time department snapshot was absent. This<br/> cannot be combined with departments. |
| `departments`                                                                                                 | *string*[]                                                                                                    | :heavy_minus_sign:                                                                                            | Spend-time department snapshots to include.                                                                   |
| `modelIds`                                                                                                    | *string*[]                                                                                                    | :heavy_minus_sign:                                                                                            | Model IDs to include.                                                                                         |
| `userIds`                                                                                                     | *string*[]                                                                                                    | :heavy_minus_sign:                                                                                            | User IDs to include.                                                                                          |