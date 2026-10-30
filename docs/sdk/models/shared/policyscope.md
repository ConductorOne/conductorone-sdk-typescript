# PolicyScope

Scopes a policy to an app or to a single entitlement within an app.

## Example Usage

```typescript
import { PolicyScope } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PolicyScope = {};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `appEntitlementId`                                                                                        | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | Optional. When set, the policy is scoped to this entitlement of app_id<br/> rather than to the whole app. |
| `appId`                                                                                                   | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The ID of the app this policy is scoped to.                                                               |
| `slot`                                                                                                    | [shared.Slot](../../../sdk/models/shared/slot.md)                                                         | :heavy_minus_sign:                                                                                        | Which of the object's local-policy slots this policy occupies. Part of the<br/> scope, and immutable with it. |