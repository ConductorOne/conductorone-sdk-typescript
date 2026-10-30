# ListOwnedServiceAccountsRequest

The ListOwnedServiceAccountsRequest message.

## Example Usage

```typescript
import { ListOwnedServiceAccountsRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ListOwnedServiceAccountsRequest = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `expandMask`                                                                | [shared.AppUserExpandMask](../../../sdk/models/shared/appuserexpandmask.md) | :heavy_minus_sign:                                                          | N/A                                                                         |
| `pageSize`                                                                  | *number*                                                                    | :heavy_minus_sign:                                                          | The maximum number of results to return per page.                           |
| `pageToken`                                                                 | *string*                                                                    | :heavy_minus_sign:                                                          | The token for fetching the next page of results.                            |