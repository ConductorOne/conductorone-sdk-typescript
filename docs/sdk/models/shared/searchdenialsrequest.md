# SearchDenialsRequest

SearchDenialsRequest specifies denial filters and pagination.

## Example Usage

```typescript
import { SearchDenialsRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SearchDenialsRequest = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `filters`                                                                       | [shared.DenialFilters](../../../sdk/models/shared/denialfilters.md)             | :heavy_minus_sign:                                                              | N/A                                                                             |
| `pageSize`                                                                      | *number*                                                                        | :heavy_minus_sign:                                                              | Maximum number of episodes to return. The default is 25 and the maximum is 100. |
| `pageToken`                                                                     | *string*                                                                        | :heavy_minus_sign:                                                              | Pagination token from a previous response with the same filters.                |