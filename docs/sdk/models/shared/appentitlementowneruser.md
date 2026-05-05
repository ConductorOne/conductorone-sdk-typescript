# AppEntitlementOwnerUser

AppEntitlementOwnerUser represents a user ownership source for an app entitlement.

## Example Usage

```typescript
import { AppEntitlementOwnerUser } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppEntitlementOwnerUser = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `roleSlug`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The roleSlug field.                                                                           |
| `user`                                                                                        | [shared.User](../../../sdk/models/shared/user.md)                                             | :heavy_minus_sign:                                                                            | The User object provides all of the details for an user, as well as some configuration.       |