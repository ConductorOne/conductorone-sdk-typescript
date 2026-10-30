# UserOwnerUser

UserOwnerUser represents a user ownership source for a canonical User (a service account).

## Example Usage

```typescript
import { UserOwnerUser } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UserOwnerUser = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `roleSlug`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The roleSlug field.                                                                           |
| `user`                                                                                        | [shared.User](../../../sdk/models/shared/user.md)                                             | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `userId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | The userId field.                                                                             |