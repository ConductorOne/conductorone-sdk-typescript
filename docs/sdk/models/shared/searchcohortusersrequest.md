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
| `pageSize`                                                            | *number*                                                              | :heavy_minus_sign:                                                    | The pageSize field.                                                   |
| `pageToken`                                                           | *string*                                                              | :heavy_minus_sign:                                                    | The pageToken field.                                                  |
| `profileFilters`                                                      | [shared.ProfileFilter](../../../sdk/models/shared/profilefilter.md)[] | :heavy_minus_sign:                                                    | The profileFilters field.                                             |