# SetAppOwnersRequestV2

SetAppOwnersRequest is the request for setting user owners for an app and role.

## Example Usage

```typescript
import { SetAppOwnersRequestV2 } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SetAppOwnersRequestV2 = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `appEntitlementRefs`                                                          | [shared.AppEntitlementRef](../../../sdk/models/shared/appentitlementref.md)[] | :heavy_minus_sign:                                                            | The appEntitlementRefs field.                                                 |
| `roleSlug`                                                                    | *string*                                                                      | :heavy_minus_sign:                                                            | The roleSlug field.                                                           |
| `userRefs`                                                                    | [shared.UserRef](../../../sdk/models/shared/userref.md)[]                     | :heavy_minus_sign:                                                            | The userRefs field.                                                           |