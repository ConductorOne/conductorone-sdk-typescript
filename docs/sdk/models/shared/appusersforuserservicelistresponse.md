# AppUsersForUserServiceListResponse

The response message for listing app users correlated to a specific C1 user.

## Example Usage

```typescript
import { AppUsersForUserServiceListResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppUsersForUserServiceListResponse = {};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `expanded`                                                                                                                      | [shared.AppUsersForUserServiceListResponseExpanded](../../../sdk/models/shared/appusersforuserservicelistresponseexpanded.md)[] | :heavy_minus_sign:                                                                                                              | List of serialized related objects.                                                                                             |
| `list`                                                                                                                          | [shared.AppUserView](../../../sdk/models/shared/appuserview.md)[]                                                               | :heavy_minus_sign:                                                                                                              | The list of app user results.                                                                                                   |
| `nextPageToken`                                                                                                                 | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | The token for fetching the next page of results.                                                                                |