# SetExpiringUserDelegationBindingByAdminRequest

SetExpiringUserDelegationBindingByAdminRequest is the request for an admin to set a temporary delegation binding for a user.

## Example Usage

```typescript
import { SetExpiringUserDelegationBindingByAdminRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SetExpiringUserDelegationBindingByAdminRequest = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `delegatedUserId`                                                                             | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the user who will act as delegate. Empty string removes the delegation.             |
| `delegationExpireAt`                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `delegationStartAt`                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |