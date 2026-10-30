# UserOwnerEntitlement

UserOwnerEntitlement represents an entitlement ownership source for a canonical User (a service account).

## Example Usage

```typescript
import { UserOwnerEntitlement } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UserOwnerEntitlement = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `appEntitlement`                                                                              | [shared.AppEntitlement](../../../sdk/models/shared/appentitlement.md)                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `roleSlug`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The roleSlug field.                                                                           |
| `userId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | The userId field.                                                                             |