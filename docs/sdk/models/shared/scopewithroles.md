# ScopeWithRoles

ScopeWithRoles represents a single scope resource in an access profile with all of its bound roles.
 There is one entry per unique (app, scope). When is_app_access is true, roles is empty and the
 binding grants app access instead of a role.

## Example Usage

```typescript
import { ScopeWithRoles } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ScopeWithRoles = {};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `appId`                                                                                             | *string*                                                                                            | :heavy_minus_sign:                                                                                  | The unique identifier of the app that the scope belongs to.                                         |
| `catalogId`                                                                                         | *string*                                                                                            | :heavy_minus_sign:                                                                                  | The unique identifier of the access profile.                                                        |
| `isAppAccess`                                                                                       | *boolean*                                                                                           | :heavy_minus_sign:                                                                                  | True when the binding is an app-access entitlement rather than a role; roles is empty in that case. |
| `ref`                                                                                               | [shared.ScopeRoleBindingRef](../../../sdk/models/shared/scoperolebindingref.md)                     | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `roles`                                                                                             | [shared.AppResource](../../../sdk/models/shared/appresource.md)[]                                   | :heavy_minus_sign:                                                                                  | The roles bound to this scope in the access profile.                                                |
| `scopeAppResource`                                                                                  | [shared.AppResource](../../../sdk/models/shared/appresource.md)                                     | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `scopeAppResourceType`                                                                              | [shared.AppResourceType](../../../sdk/models/shared/appresourcetype.md)                             | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |