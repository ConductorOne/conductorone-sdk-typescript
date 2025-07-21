# AppEntitlementAutomationInput

The AppEntitlementAutomation message.

This message contains a oneof named conditions. Only a single field of the following list may be set at a time:
  - none
  - entitlements
  - cel
  - basic


## Example Usage

```typescript
import { AppEntitlementAutomationInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppEntitlementAutomationInput = {};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `appEntitlementAutomationRuleBasic`                                                                                           | [shared.AppEntitlementAutomationRuleBasic](../../../sdk/models/shared/appentitlementautomationrulebasic.md)                   | :heavy_minus_sign:                                                                                                            | The AppEntitlementAutomationRuleBasic message.                                                                                |
| `appEntitlementAutomationRuleCEL`                                                                                             | [shared.AppEntitlementAutomationRuleCEL](../../../sdk/models/shared/appentitlementautomationrulecel.md)                       | :heavy_minus_sign:                                                                                                            | The AppEntitlementAutomationRuleCEL message.                                                                                  |
| `description`                                                                                                                 | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | The description of the app entitlement.                                                                                       |
| `displayName`                                                                                                                 | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | The display name of the app entitlement.                                                                                      |
| `appEntitlementAutomationRuleEntitlement`                                                                                     | [shared.AppEntitlementAutomationRuleEntitlement](../../../sdk/models/shared/appentitlementautomationruleentitlement.md)       | :heavy_minus_sign:                                                                                                            | The AppEntitlementAutomationRuleEntitlement message.                                                                          |
| `appEntitlementAutomationLastRunStatus`                                                                                       | [shared.AppEntitlementAutomationLastRunStatusInput](../../../sdk/models/shared/appentitlementautomationlastrunstatusinput.md) | :heavy_minus_sign:                                                                                                            | The AppEntitlementAutomationLastRunStatus message.                                                                            |
| `appEntitlementAutomationRuleNone`                                                                                            | [shared.AppEntitlementAutomationRuleNone](../../../sdk/models/shared/appentitlementautomationrulenone.md)                     | :heavy_minus_sign:                                                                                                            | The AppEntitlementAutomationRuleNone message.                                                                                 |