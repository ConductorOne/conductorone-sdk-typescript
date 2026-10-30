# SessionPolicyServiceGetEffectiveSessionPolicyResponse

SessionPolicyServiceGetEffectiveSessionPolicyResponse carries the effective
 policy and why it applies.

## Example Usage

```typescript
import { SessionPolicyServiceGetEffectiveSessionPolicyResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SessionPolicyServiceGetEffectiveSessionPolicyResponse = {};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `group`                                                                                                                                                         | [shared.AppEntitlement](../../../sdk/models/shared/appentitlement.md)                                                                                           | :heavy_minus_sign:                                                                                                                                              | N/A                                                                                                                                                             |
| `sessionPolicy`                                                                                                                                                 | [shared.SessionPolicy](../../../sdk/models/shared/sessionpolicy.md)                                                                                             | :heavy_minus_sign:                                                                                                                                              | N/A                                                                                                                                                             |
| `source`                                                                                                                                                        | [shared.SessionPolicyServiceGetEffectiveSessionPolicyResponseSource](../../../sdk/models/shared/sessionpolicyservicegeteffectivesessionpolicyresponsesource.md) | :heavy_minus_sign:                                                                                                                                              | Why the policy applies.                                                                                                                                         |