# UserWithAppEntitlementUserBindingView

The UserWithAppEntitlementUserBindingView message.

## Example Usage

```typescript
import { UserWithAppEntitlementUserBindingView } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UserWithAppEntitlementUserBindingView = {};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `appEntitlementId`                                   | *string*                                             | :heavy_minus_sign:                                   | The ID of the app entitlement.                       |
| `appId`                                              | *string*                                             | :heavy_minus_sign:                                   | The ID of the app that contains the entitlement.     |
| `appUserId`                                          | *string*                                             | :heavy_minus_sign:                                   | The ID of the app user associated with this binding. |
| `user`                                               | [shared.User](../../../sdk/models/shared/user.md)    | :heavy_minus_sign:                                   | N/A                                                  |