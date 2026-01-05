# AccountCriteriaScope

The AccountCriteriaScope message.

## Example Usage

```typescript
import { AccountCriteriaScope } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccountCriteriaScope = {};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `accountDomain`                                                                                                   | [shared.AccountDomain](../../../sdk/models/shared/accountdomain.md)                                               | :heavy_minus_sign:                                                                                                | The accountDomain field.                                                                                          |
| `accountTypes`                                                                                                    | [shared.AccountTypes](../../../sdk/models/shared/accounttypes.md)[]                                               | :heavy_minus_sign:                                                                                                | The accountTypes field.                                                                                           |
| `appUserStatuses`                                                                                                 | [shared.AccountCriteriaScopeAppUserStatuses](../../../sdk/models/shared/accountcriteriascopeappuserstatuses.md)[] | :heavy_minus_sign:                                                                                                | The appUserStatuses field.                                                                                        |
| `noAccountOwner`                                                                                                  | *boolean*                                                                                                         | :heavy_minus_sign:                                                                                                | The noAccountOwner field.                                                                                         |