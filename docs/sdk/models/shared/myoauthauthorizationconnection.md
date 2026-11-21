# MyOAuthAuthorizationConnection

MyOAuthAuthorizationConnection is a user's current consent, including connections whose access was subsequently removed.

## Example Usage

```typescript
import { MyOAuthAuthorizationConnection } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MyOAuthAuthorizationConnection = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `authorization`                                                                               | [shared.MyOAuthAuthorization](../../../sdk/models/shared/myoauthauthorization.md)             | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `grantId`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | The grantId field.                                                                            |
| `lastUsedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `selectedRoleIds`                                                                             | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | The selectedRoleIds field.                                                                    |