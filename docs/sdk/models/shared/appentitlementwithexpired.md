# AppEntitlementWithExpired

A grant with its expiry and discovery timestamps, along with the associated app user and ConductorOne user.

## Example Usage

```typescript
import { AppEntitlementWithExpired } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppEntitlementWithExpired = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `appEntitlementId`                                                                             | *string*                                                                                       | :heavy_minus_sign:                                                                             | The ID of the app entitlement.                                                                 |
| `appId`                                                                                        | *string*                                                                                       | :heavy_minus_sign:                                                                             | The ID of the app that contains the entitlement.                                               |
| `appUser`                                                                                      | [shared.AppUser](../../../sdk/models/shared/appuser.md)                                        | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `appUserId`                                                                                    | *string*                                                                                       | :heavy_minus_sign:                                                                             | The ID of the app user who holds the grant.                                                    |
| `discovered`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `expired`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `grantReasons`                                                                                 | [shared.GrantReason](../../../sdk/models/shared/grantreason.md)[]                              | :heavy_minus_sign:                                                                             | The reasons this grant was given (e.g., access request, automation).                           |
| `grantSources`                                                                                 | [shared.AppEntitlementRef](../../../sdk/models/shared/appentitlementref.md)[]                  | :heavy_minus_sign:                                                                             | Entitlements that are the source of this grant (e.g., a group membership that implies a role). |
| `user`                                                                                         | [shared.User](../../../sdk/models/shared/user.md)                                              | :heavy_minus_sign:                                                                             | N/A                                                                                            |