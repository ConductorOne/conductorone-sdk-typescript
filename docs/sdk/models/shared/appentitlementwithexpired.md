# AppEntitlementWithExpired

The AppEntitlementWithExpired message.

## Example Usage

```typescript
import { AppEntitlementWithExpired } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppEntitlementWithExpired = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `appEntitlementId`                                                                            | *string*                                                                                      | :heavy_minus_sign:                                                                            | The appEntitlementId field.                                                                   |
| `appId`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | The appId field.                                                                              |
| `appUser`                                                                                     | [shared.AppUser](../../../sdk/models/shared/appuser.md)                                       | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `appUserId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The appUserId field.                                                                          |
| `discovered`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `expired`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `grantReasons`                                                                                | [shared.GrantReason](../../../sdk/models/shared/grantreason.md)[]                             | :heavy_minus_sign:                                                                            | The grantReasons field.                                                                       |
| `grantSources`                                                                                | [shared.AppEntitlementRef](../../../sdk/models/shared/appentitlementref.md)[]                 | :heavy_minus_sign:                                                                            | The grantSources field.                                                                       |
| `user`                                                                                        | [shared.User](../../../sdk/models/shared/user.md)                                             | :heavy_minus_sign:                                                                            | N/A                                                                                           |