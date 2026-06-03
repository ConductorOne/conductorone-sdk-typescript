# SearchAppResourceEntitlementOwnersResponse

SearchAppResourceEntitlementOwnersResponse is the response for searching entitlement ownership sources on a resource.

## Example Usage

```typescript
import { SearchAppResourceEntitlementOwnersResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SearchAppResourceEntitlementOwnersResponse = {};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `list`                                                                                            | [shared.AppResourceOwnerEntitlement](../../../sdk/models/shared/appresourceownerentitlement.md)[] | :heavy_minus_sign:                                                                                | The list field.                                                                                   |
| `nextPageToken`                                                                                   | *string*                                                                                          | :heavy_minus_sign:                                                                                | The nextPageToken field.                                                                          |