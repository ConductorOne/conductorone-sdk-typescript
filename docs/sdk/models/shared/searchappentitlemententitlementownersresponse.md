# SearchAppEntitlementEntitlementOwnersResponse

SearchAppEntitlementEntitlementOwnersResponse is the response for searching entitlement ownership sources on an entitlement.

## Example Usage

```typescript
import { SearchAppEntitlementEntitlementOwnersResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SearchAppEntitlementEntitlementOwnersResponse = {};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `list`                                                                                                  | [shared.AppEntitlementOwnerEntitlement](../../../sdk/models/shared/appentitlementownerentitlement.md)[] | :heavy_minus_sign:                                                                                      | The list field.                                                                                         |
| `nextPageToken`                                                                                         | *string*                                                                                                | :heavy_minus_sign:                                                                                      | The nextPageToken field.                                                                                |