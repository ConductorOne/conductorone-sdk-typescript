# EffectiveUserPolicy

EffectiveUserPolicy is one session policy that applies to a user.

## Example Usage

```typescript
import { EffectiveUserPolicy } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EffectiveUserPolicy = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `group`                                                                                     | [shared.AppEntitlement](../../../sdk/models/shared/appentitlement.md)                       | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `policy`                                                                                    | [shared.SessionPolicy](../../../sdk/models/shared/sessionpolicy.md)                         | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `source`                                                                                    | [shared.EffectiveUserPolicySource](../../../sdk/models/shared/effectiveuserpolicysource.md) | :heavy_minus_sign:                                                                          | Why the policy applies to the user.                                                         |