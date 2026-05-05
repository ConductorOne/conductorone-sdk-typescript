# SearchAppEntitlementUserOwnersResponse

SearchAppEntitlementUserOwnersResponse is the response for searching user ownership sources on an entitlement.

## Example Usage

```typescript
import { SearchAppEntitlementUserOwnersResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SearchAppEntitlementUserOwnersResponse = {};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `list`                                                                                    | [shared.AppEntitlementOwnerUser](../../../sdk/models/shared/appentitlementowneruser.md)[] | :heavy_minus_sign:                                                                        | The list field.                                                                           |
| `nextPageToken`                                                                           | *string*                                                                                  | :heavy_minus_sign:                                                                        | The nextPageToken field.                                                                  |