# AccessProfileComponentTarget

One component of an access profile's definition that an action task changes.

This message contains a oneof named component. Only a single field of the following list may be set at a time:
  - compositionEntitlement
  - membershipRule
  - membershipEntitlement


## Example Usage

```typescript
import { AccessProfileComponentTarget } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessProfileComponentTarget = {};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `accessProfile`                                                                                 | [shared.AccessProfileRef](../../../sdk/models/shared/accessprofileref.md)                       | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `compositionEntitlement`                                                                        | [shared.AppEntitlementRef](../../../sdk/models/shared/appentitlementref.md)                     | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `membershipEntitlement`                                                                         | [shared.AppEntitlementRef](../../../sdk/models/shared/appentitlementref.md)                     | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `membershipRule`                                                                                | [shared.AccessProfileMembershipRule](../../../sdk/models/shared/accessprofilemembershiprule.md) | :heavy_minus_sign:                                                                              | N/A                                                                                             |