# EdgeServicePreviewEgressRulesUpdateRequest

EdgeServicePreviewEgressRulesUpdateRequest asks what saving a rule list
 would do: whether Update accepts it, and how each host's verdict changes.
 Nothing is saved.

## Example Usage

```typescript
import { EdgeServicePreviewEgressRulesUpdateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeServicePreviewEgressRulesUpdateRequest = {};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `hosts`                                                                                                                                            | *string*[]                                                                                                                                         | :heavy_minus_sign:                                                                                                                                 | Hosts to compare before and after, in the order results are returned.<br/> Empty runs only the save check.                                         |
| `principalUserId`                                                                                                                                  | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The C1 user to evaluate as. Empty: rules naming a user or an entitlement<br/> report EDGE_EGRESS_PRINCIPAL_MATCH_UNKNOWN and never decide the verdict. |
| `proposedRules`                                                                                                                                    | [shared.EdgeEgressRuleList](../../../sdk/models/shared/edgeegressrulelist.md)                                                                      | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |