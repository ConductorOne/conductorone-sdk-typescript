# AppEntitlementUserView

The AppEntitlementUserView (aka grant view) describes the relationship between an app user and an entitlement. They have more recently been referred to as grants.

## Example Usage

```typescript
import { AppEntitlementUserView } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppEntitlementUserView = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `appEntitlementUserBindingCreatedAt`                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `appEntitlementUserBindingDeprovisionAt`                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `appUser`                                                                                     | [shared.AppUserView](../../../sdk/models/shared/appuserview.md)                               | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `grantSources`                                                                                | [shared.AppEntitlementRef](../../../sdk/models/shared/appentitlementref.md)[]                 | :heavy_minus_sign:                                                                            | List of sources for the grant, ie. groups, roles, etc.                                        |