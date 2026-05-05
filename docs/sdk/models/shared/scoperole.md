# ScopeRole

Scope-role variant of TaskTypeAction.target_object. The UI uses the
 embedded identifiers to build links and title strings without a separate
 Action fetch.

## Example Usage

```typescript
import { ScopeRole } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ScopeRole = {};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `appId`                                                  | *string*                                                 | :heavy_minus_sign:                                       | The IaaS/sparse-ACL app the (scope, role) pair lives on. |
| `grantDuration`                                          | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `roleResourceId`                                         | *string*                                                 | :heavy_minus_sign:                                       | The roleResourceId field.                                |
| `roleResourceTypeId`                                     | *string*                                                 | :heavy_minus_sign:                                       | The roleResourceTypeId field.                            |
| `scopeResourceId`                                        | *string*                                                 | :heavy_minus_sign:                                       | The scopeResourceId field.                               |
| `scopeResourceTypeId`                                    | *string*                                                 | :heavy_minus_sign:                                       | The scopeResourceTypeId field.                           |