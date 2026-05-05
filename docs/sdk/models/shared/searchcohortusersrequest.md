# SearchCohortUsersRequest

The SearchCohortUsersRequest message.

## Example Usage

```typescript
import { SearchCohortUsersRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SearchCohortUsersRequest = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `pageSize`                                                            | *number*                                                              | :heavy_minus_sign:                                                    | Maximum number of users to return per page.                           |
| `pageToken`                                                           | *string*                                                              | :heavy_minus_sign:                                                    | Pagination token from a previous response.                            |
| `profileFilters`                                                      | [shared.ProfileFilter](../../../sdk/models/shared/profilefilter.md)[] | :heavy_minus_sign:                                                    | Additional profile filters to narrow the cohort user search.          |