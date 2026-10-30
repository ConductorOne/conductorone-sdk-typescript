# SearchUserEntitlementOwnersResponse

SearchUserEntitlementOwnersResponse is the response for searching entitlement ownership sources on a user (service account).

## Example Usage

```typescript
import { SearchUserEntitlementOwnersResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SearchUserEntitlementOwnersResponse = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `list`                                                                              | [shared.UserOwnerEntitlement](../../../sdk/models/shared/userownerentitlement.md)[] | :heavy_minus_sign:                                                                  | The list field.                                                                     |
| `nextPageToken`                                                                     | *string*                                                                            | :heavy_minus_sign:                                                                  | The nextPageToken field.                                                            |