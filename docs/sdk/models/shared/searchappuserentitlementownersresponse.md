# SearchAppUserEntitlementOwnersResponse

SearchAppUserEntitlementOwnersResponse is the response for searching entitlement ownership sources on an app user.

## Example Usage

```typescript
import { SearchAppUserEntitlementOwnersResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SearchAppUserEntitlementOwnersResponse = {};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `list`                                                                                    | [shared.AppUserOwnerEntitlement](../../../sdk/models/shared/appuserownerentitlement.md)[] | :heavy_minus_sign:                                                                        | The list field.                                                                           |
| `nextPageToken`                                                                           | *string*                                                                                  | :heavy_minus_sign:                                                                        | The nextPageToken field.                                                                  |