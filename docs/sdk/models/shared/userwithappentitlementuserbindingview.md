# UserWithAppEntitlementUserBindingView

The UserWithAppEntitlementUserBindingView message.

## Example Usage

```typescript
import { UserWithAppEntitlementUserBindingView } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UserWithAppEntitlementUserBindingView = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `appEntitlementId`                                                                      | *string*                                                                                | :heavy_minus_sign:                                                                      | The appEntitlementId field.                                                             |
| `appId`                                                                                 | *string*                                                                                | :heavy_minus_sign:                                                                      | The appId field.                                                                        |
| `appUserId`                                                                             | *string*                                                                                | :heavy_minus_sign:                                                                      | The appUserId field.                                                                    |
| `user`                                                                                  | [shared.User](../../../sdk/models/shared/user.md)                                       | :heavy_minus_sign:                                                                      | The User object provides all of the details for an user, as well as some configuration. |