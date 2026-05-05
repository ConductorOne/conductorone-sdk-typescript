# SetAppEntitlementOwnersV2Request

SetAppEntitlementOwnersV2Request is the request for setting the owners of an app entitlement for a given role.

## Example Usage

```typescript
import { SetAppEntitlementOwnersV2Request } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SetAppEntitlementOwnersV2Request = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `appEntitlementRefs`                                                          | [shared.AppEntitlementRef](../../../sdk/models/shared/appentitlementref.md)[] | :heavy_minus_sign:                                                            | The appEntitlementRefs field.                                                 |
| `roleSlug`                                                                    | *string*                                                                      | :heavy_minus_sign:                                                            | Empty defaults to the "primary" role on the server side.                      |
| `userRefs`                                                                    | [shared.UserRef](../../../sdk/models/shared/userref.md)[]                     | :heavy_minus_sign:                                                            | The userRefs field.                                                           |