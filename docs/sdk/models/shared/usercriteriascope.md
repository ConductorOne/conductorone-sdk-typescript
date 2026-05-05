# UserCriteriaScope

The UserCriteriaScope message.

## Example Usage

```typescript
import { UserCriteriaScope } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UserCriteriaScope = {};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `groupAppEntitlementsRef`                                                                                       | [shared.AppEntitlementRef](../../../sdk/models/shared/appentitlementref.md)[]                                   | :heavy_minus_sign:                                                                                              | The groupAppEntitlementsRef field.                                                                              |
| `managerUserIds`                                                                                                | *string*[]                                                                                                      | :heavy_minus_sign:                                                                                              | The managerUserIds field.                                                                                       |
| `multiUserProfileAttributes`                                                                                    | Record<string, [shared.IncludedUserAttributeValues](../../../sdk/models/shared/includeduserattributevalues.md)> | :heavy_minus_sign:                                                                                              | The multiUserProfileAttributes field.                                                                           |
| `userStatus`                                                                                                    | [shared.UserStatus](../../../sdk/models/shared/userstatus.md)[]                                                 | :heavy_minus_sign:                                                                                              | The userStatus field.                                                                                           |