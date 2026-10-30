# EdgeEgressRuleMatch

EdgeEgressRuleMatch is one rule whose pattern matches an evaluated host.

## Example Usage

```typescript
import { EdgeEgressRuleMatch } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeEgressRuleMatch = {};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `entitlementOverCap`                                                                                                                      | *boolean*                                                                                                                                 | :heavy_minus_sign:                                                                                                                        | A Deny rule whose entitlement has more members than the Edge config<br/> carries; it applies to every user, so principal_match is MATCHES. |
| `principalMatch`                                                                                                                          | [shared.PrincipalMatch](../../../sdk/models/shared/principalmatch.md)                                                                     | :heavy_minus_sign:                                                                                                                        | The principalMatch field.                                                                                                                 |
| `ruleIndex`                                                                                                                               | *number*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | The ruleIndex field.                                                                                                                      |
| `shadowed`                                                                                                                                | *boolean*                                                                                                                                 | :heavy_minus_sign:                                                                                                                        | An earlier rule already decided this host for this caller, so this one<br/> never applies. Set only with EDGE_EGRESS_PRINCIPAL_MATCH_MATCHES. |