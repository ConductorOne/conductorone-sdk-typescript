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
| `appEntitlementId`                                                                            | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the app entitlement that the app user has access to.                                |
| `appEntitlementUserBindingCreatedAt`                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `appEntitlementUserBindingDeprovisionAt`                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `appId`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the app associated with the grant.                                                  |
| `appUser`                                                                                     | [shared.AppUserView](../../../sdk/models/shared/appuserview.md)                               | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `appUserId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the app user that has access to the app entitlement.                                |
| `grantSources`                                                                                | [shared.AppEntitlementRef](../../../sdk/models/shared/appentitlementref.md)[]                 | :heavy_minus_sign:                                                                            | List of sources for the grant, ie. groups, roles, etc.                                        |
| `originatingTicketId`                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | The originating ticket ID for the grant (e.g. from a request ticket).                         |