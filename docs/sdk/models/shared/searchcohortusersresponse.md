# SearchCohortUsersResponse

The SearchCohortUsersResponse message.

## Example Usage

```typescript
import { SearchCohortUsersResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SearchCohortUsersResponse = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `list`                                                                                  | [shared.User](../../../sdk/models/shared/user.md)[]                                     | :heavy_minus_sign:                                                                      | The list of users matching the cohort and optional filters.                             |
| `nextPageToken`                                                                         | *string*                                                                                | :heavy_minus_sign:                                                                      | Token to retrieve the next page of results, empty if no more results.                   |
| `usersWithCoverage`                                                                     | [shared.CohortUserWithCoverage](../../../sdk/models/shared/cohortuserwithcoverage.md)[] | :heavy_minus_sign:                                                                      | Per-user coverage counts, populated when selected_entitlements is non-empty.            |