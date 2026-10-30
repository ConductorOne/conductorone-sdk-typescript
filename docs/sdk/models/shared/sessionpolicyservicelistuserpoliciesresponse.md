# SessionPolicyServiceListUserPoliciesResponse

SessionPolicyServiceListUserPoliciesResponse carries every policy that
 applies to the user. Unpaginated: the candidate set is the user's assigned
 policies plus at most one tenant default.

## Example Usage

```typescript
import { SessionPolicyServiceListUserPoliciesResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SessionPolicyServiceListUserPoliciesResponse = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `policies`                                                                        | [shared.EffectiveUserPolicy](../../../sdk/models/shared/effectiveuserpolicy.md)[] | :heavy_minus_sign:                                                                | Every policy that applies to the user, in assignment order.                       |