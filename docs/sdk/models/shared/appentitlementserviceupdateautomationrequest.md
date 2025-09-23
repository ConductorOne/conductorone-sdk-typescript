# AppEntitlementServiceUpdateAutomationRequest

The AppEntitlementServiceUpdateAutomationRequest message.

This message contains a oneof named conditions. Only a single field of the following list may be set at a time:
  - none
  - entitlements
  - cel
  - basic


## Example Usage

```typescript
import { AppEntitlementServiceUpdateAutomationRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppEntitlementServiceUpdateAutomationRequest = {};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `basic`                                                                                                                 | [shared.AppEntitlementAutomationRuleBasic](../../../sdk/models/shared/appentitlementautomationrulebasic.md)             | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| `cel`                                                                                                                   | [shared.AppEntitlementAutomationRuleCEL](../../../sdk/models/shared/appentitlementautomationrulecel.md)                 | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| `description`                                                                                                           | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | The description of the app entitlement.                                                                                 |
| `displayName`                                                                                                           | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | The display name of the app entitlement.                                                                                |
| `entitlements`                                                                                                          | [shared.AppEntitlementAutomationRuleEntitlement](../../../sdk/models/shared/appentitlementautomationruleentitlement.md) | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| `none`                                                                                                                  | [shared.AppEntitlementAutomationRuleNone](../../../sdk/models/shared/appentitlementautomationrulenone.md)               | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| `updateMask`                                                                                                            | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |