# ScopeRoleBindingRef

ScopeRoleBindingRef uniquely identifies a scope's binding state within an access profile and app.

## Example Usage

```typescript
import { ScopeRoleBindingRef } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ScopeRoleBindingRef = {};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `appId`                                          | *string*                                         | :heavy_minus_sign:                               | The unique identifier of the app.                |
| `catalogId`                                      | *string*                                         | :heavy_minus_sign:                               | The unique identifier of the access profile.     |
| `scopeId`                                        | *string*                                         | :heavy_minus_sign:                               | The unique identifier of the scope app resource. |