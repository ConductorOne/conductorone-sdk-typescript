# PolicyUser

PolicyUser is one user a session policy applies to.

## Example Usage

```typescript
import { PolicyUser } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PolicyUser = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `group`                                                                   | [shared.AppEntitlement](../../../sdk/models/shared/appentitlement.md)     | :heavy_minus_sign:                                                        | N/A                                                                       |
| `source`                                                                  | [shared.PolicyUserSource](../../../sdk/models/shared/policyusersource.md) | :heavy_minus_sign:                                                        | Why the policy applies to this user. DIRECT or GROUP.                     |
| `user`                                                                    | [shared.User](../../../sdk/models/shared/user.md)                         | :heavy_minus_sign:                                                        | N/A                                                                       |