# ListOwnedServiceAccountsResponse

The ListOwnedServiceAccountsResponse message.

## Example Usage

```typescript
import { ListOwnedServiceAccountsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ListOwnedServiceAccountsResponse = {};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `expanded`                                                                                                                  | [shared.ListOwnedServiceAccountsResponseExpanded](../../../sdk/models/shared/listownedserviceaccountsresponseexpanded.md)[] | :heavy_minus_sign:                                                                                                          | List of related objects.                                                                                                    |
| `list`                                                                                                                      | [shared.AppUserView](../../../sdk/models/shared/appuserview.md)[]                                                           | :heavy_minus_sign:                                                                                                          | The service accounts owned by the calling user, up to one page of results.                                                  |
| `nextPageToken`                                                                                                             | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | The token for fetching the next page of results, empty when there are no more pages.                                        |