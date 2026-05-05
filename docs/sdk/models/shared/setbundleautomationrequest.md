# SetBundleAutomationRequest

The request message for creating or updating a bundle automation rule on a catalog.

This message contains a oneof named conditions. Only a single field of the following list may be set at a time:
  - entitlements
  - cel


## Example Usage

```typescript
import { SetBundleAutomationRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SetBundleAutomationRequest = {};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `bundleAutomationRuleCEL`                                                                                         | [shared.BundleAutomationRuleCEL](../../../sdk/models/shared/bundleautomationrulecel.md)                           | :heavy_minus_sign:                                                                                                | The BundleAutomationRuleCEL message.                                                                              |
| `createTasks`                                                                                                     | *boolean*                                                                                                         | :heavy_minus_sign:                                                                                                | Whether to create access request tasks for matched users instead of granting directly.                            |
| `disableCircuitBreaker`                                                                                           | *boolean*                                                                                                         | :heavy_minus_sign:                                                                                                | Whether to disable the circuit breaker that pauses the automation when excessive membership changes are detected. |
| `enabled`                                                                                                         | *boolean*                                                                                                         | :heavy_minus_sign:                                                                                                | Whether the automation should actively run on its schedule.                                                       |
| `entitlements`                                                                                                    | [shared.BundleAutomationRuleEntitlement](../../../sdk/models/shared/bundleautomationruleentitlement.md)           | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |