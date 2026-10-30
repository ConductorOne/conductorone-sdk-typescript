# SetUserOwnersV2Request

SetUserOwnersV2Request is the request for setting the owners of a user (service account) for a given role.

## Example Usage

```typescript
import { SetUserOwnersV2Request } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SetUserOwnersV2Request = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `appEntitlementRefs`                                                          | [shared.AppEntitlementRef](../../../sdk/models/shared/appentitlementref.md)[] | :heavy_minus_sign:                                                            | The appEntitlementRefs field.                                                 |
| `roleSlug`                                                                    | *string*                                                                      | :heavy_minus_sign:                                                            | The roleSlug field.                                                           |
| `userRefs`                                                                    | [shared.UserRef](../../../sdk/models/shared/userref.md)[]                     | :heavy_minus_sign:                                                            | The userRefs field.                                                           |