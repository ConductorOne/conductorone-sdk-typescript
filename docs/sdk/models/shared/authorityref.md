# AuthorityRef

AuthorityRef identifies a configuration and the revision admission read.

## Example Usage

```typescript
import { AuthorityRef } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AuthorityRef = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `absent`                                                                  | *boolean*                                                                 | :heavy_minus_sign:                                                        | Whether admission found no configuration of this kind.                    |
| `appEntitlementId`                                                        | *string*                                                                  | :heavy_minus_sign:                                                        | Application entitlement ID, for entitlement-binding authorities.          |
| `appId`                                                                   | *string*                                                                  | :heavy_minus_sign:                                                        | Application ID the configuration applies to.                              |
| `appUserId`                                                               | *string*                                                                  | :heavy_minus_sign:                                                        | Application user ID, for application-user authorities.                    |
| `kind`                                                                    | [shared.AuthorityRefKind](../../../sdk/models/shared/authorityrefkind.md) | :heavy_minus_sign:                                                        | Type of configuration.                                                    |
| `ruleId`                                                                  | *string*                                                                  | :heavy_minus_sign:                                                        | Fund rule ID, for fund-rule authorities.                                  |
| `userId`                                                                  | *string*                                                                  | :heavy_minus_sign:                                                        | User ID the configuration applies to.                                     |
| `version`                                                                 | *number*                                                                  | :heavy_minus_sign:                                                        | Configuration revision read during admission.                             |