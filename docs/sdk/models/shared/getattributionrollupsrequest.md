# GetAttributionRollupsRequest

GetAttributionRollupsRequest specifies how to group settled spend.

## Example Usage

```typescript
import { GetAttributionRollupsRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GetAttributionRollupsRequest = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `dimension`                                                                                   | [shared.Dimension](../../../sdk/models/shared/dimension.md)                                   | :heavy_minus_sign:                                                                            | Dimension used to group settled calls.                                                        |
| `endTime`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `filters`                                                                                     | [shared.AttributionFilters](../../../sdk/models/shared/attributionfilters.md)                 | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `pageSize`                                                                                    | *number*                                                                                      | :heavy_minus_sign:                                                                            | Maximum number of groups to return. The default is 25 and the maximum is 100.                 |
| `pageToken`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | Pagination token from a previous response with the same window, dimension, and filters.       |
| `startTime`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |