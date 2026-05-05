# SetConnectorOwnersV2Request

SetConnectorOwnersV2Request is the request for setting the owners of a connector for a given role.

## Example Usage

```typescript
import { SetConnectorOwnersV2Request } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SetConnectorOwnersV2Request = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `appEntitlementRefs`                                                          | [shared.AppEntitlementRef](../../../sdk/models/shared/appentitlementref.md)[] | :heavy_minus_sign:                                                            | The appEntitlementRefs field.                                                 |
| `roleSlug`                                                                    | *string*                                                                      | :heavy_minus_sign:                                                            | The role slug for this ownership grant. Required.                             |
| `userRefs`                                                                    | [shared.UserRef](../../../sdk/models/shared/userref.md)[]                     | :heavy_minus_sign:                                                            | The userRefs field.                                                           |