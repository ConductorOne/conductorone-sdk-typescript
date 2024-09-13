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
| `appUser`                                                                                     | [shared.AppUser](../../../sdk/models/shared/appuser.md)                                       | :heavy_minus_sign:                                                                            | Application User that represents an account in the application.                               |
| `discovered`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `expired`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `user`                                                                                        | [shared.User](../../../sdk/models/shared/user.md)                                             | :heavy_minus_sign:                                                                            | The User object provides all of the details for an user, as well as some configuration.       |