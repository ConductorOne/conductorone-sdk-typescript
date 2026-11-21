# MyOAuthAuthorization

MyOAuthAuthorization exposes the information needed to connect an authorization.

## Example Usage

```typescript
import { MyOAuthAuthorization } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MyOAuthAuthorization = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `allowedRoleIds`                                                              | *string*[]                                                                    | :heavy_minus_sign:                                                            | The allowedRoleIds field.                                                     |
| `clientId`                                                                    | *string*                                                                      | :heavy_minus_sign:                                                            | The clientId field.                                                           |
| `displayName`                                                                 | *string*                                                                      | :heavy_minus_sign:                                                            | The displayName field.                                                        |
| `id`                                                                          | *string*                                                                      | :heavy_minus_sign:                                                            | The id field.                                                                 |
| `useEntitlementAppId`                                                         | *string*                                                                      | :heavy_minus_sign:                                                            | The C1 app containing the entitlement that governs use of this authorization. |
| `useEntitlementId`                                                            | *string*                                                                      | :heavy_minus_sign:                                                            | The useEntitlementId field.                                                   |