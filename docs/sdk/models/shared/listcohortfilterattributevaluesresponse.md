# ListCohortFilterAttributeValuesResponse

The ListCohortFilterAttributeValuesResponse message.

## Example Usage

```typescript
import { ListCohortFilterAttributeValuesResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ListCohortFilterAttributeValuesResponse = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `nextPageToken`                                                                             | *string*                                                                                    | :heavy_minus_sign:                                                                          | The nextPageToken field.                                                                    |
| `values`                                                                                    | [shared.RoleMiningAttributeValue](../../../sdk/models/shared/roleminingattributevalue.md)[] | :heavy_minus_sign:                                                                          | The values field.                                                                           |