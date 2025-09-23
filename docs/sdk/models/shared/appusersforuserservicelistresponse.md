# AppUsersForUserServiceListResponse

The AppUsersForUserServiceListResponse message.

## Example Usage

```typescript
import { AppUsersForUserServiceListResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppUsersForUserServiceListResponse = {};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `expanded`                                                                                                                      | [shared.AppUsersForUserServiceListResponseExpanded](../../../sdk/models/shared/appusersforuserservicelistresponseexpanded.md)[] | :heavy_minus_sign:                                                                                                              | The expanded field.                                                                                                             |
| `list`                                                                                                                          | [shared.AppUserView](../../../sdk/models/shared/appuserview.md)[]                                                               | :heavy_minus_sign:                                                                                                              | The list field.                                                                                                                 |
| `nextPageToken`                                                                                                                 | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | The nextPageToken field.                                                                                                        |