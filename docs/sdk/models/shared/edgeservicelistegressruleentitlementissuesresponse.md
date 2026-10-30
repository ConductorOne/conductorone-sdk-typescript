# EdgeServiceListEgressRuleEntitlementIssuesResponse

The EdgeServiceListEgressRuleEntitlementIssuesResponse message.

## Example Usage

```typescript
import { EdgeServiceListEgressRuleEntitlementIssuesResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeServiceListEgressRuleEntitlementIssuesResponse = {};
```

## Fields

| Field                                                                                                                                                                                | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `issues`                                                                                                                                                                             | [shared.EdgeEgressRuleEntitlementIssue](../../../sdk/models/shared/edgeegressruleentitlementissue.md)[]                                                                              | :heavy_minus_sign:                                                                                                                                                                   | One entry per saved Allow or Deny rule whose entitlement does not<br/> resolve, in rule order. Rules naming more distinct entitlements than the<br/> evaluation cap are not checked past it. |