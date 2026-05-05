# AppUserServiceListResponse

The response message for listing app users.

## Example Usage

```typescript
import { AppUserServiceListResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppUserServiceListResponse = {};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `expanded`                                                                                                      | [shared.AppUserServiceListResponseExpanded](../../../sdk/models/shared/appuserservicelistresponseexpanded.md)[] | :heavy_minus_sign:                                                                                              | List of serialized related objects.                                                                             |
| `list`                                                                                                          | [shared.AppUserView](../../../sdk/models/shared/appuserview.md)[]                                               | :heavy_minus_sign:                                                                                              | The list of app user results.                                                                                   |
| `nextPageToken`                                                                                                 | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | The token for fetching the next page of results.                                                                |