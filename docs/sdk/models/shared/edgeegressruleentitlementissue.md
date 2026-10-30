# EdgeEgressRuleEntitlementIssue

EdgeEgressRuleEntitlementIssue is one egress rule whose entitlement does not
 resolve.

## Example Usage

```typescript
import { EdgeEgressRuleEntitlementIssue } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeEgressRuleEntitlementIssue = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `cause`                                                                                       | [shared.Cause](../../../sdk/models/shared/cause.md)                                           | :heavy_minus_sign:                                                                            | The cause field.                                                                              |
| `deletedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `enforcement`                                                                                 | [shared.Enforcement](../../../sdk/models/shared/enforcement.md)                               | :heavy_minus_sign:                                                                            | What the Edge enforces for this rule.                                                         |
| `entitlementDisplayName`                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | The entitlement's name, when its row could be read.                                           |
| `entitlementId`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | The entitlementId field.                                                                      |
| `ruleIndex`                                                                                   | *number*                                                                                      | :heavy_minus_sign:                                                                            | Zero-based index into the saved rules.                                                        |