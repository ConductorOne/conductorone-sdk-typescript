# SetAppEntitlementOwnersRequestV2

SetAppEntitlementOwnersRequest is the request for setting the owners of an app entitlement for a given role.

## Example Usage

```typescript
import { SetAppEntitlementOwnersRequestV2 } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SetAppEntitlementOwnersRequestV2 = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `appEntitlementRefs`                                                          | [shared.AppEntitlementRef](../../../sdk/models/shared/appentitlementref.md)[] | :heavy_minus_sign:                                                            | The appEntitlementRefs field.                                                 |
| `roleSlug`                                                                    | *string*                                                                      | :heavy_minus_sign:                                                            | The roleSlug field.                                                           |
| `userRefs`                                                                    | [shared.UserRef](../../../sdk/models/shared/userref.md)[]                     | :heavy_minus_sign:                                                            | The userRefs field.                                                           |