# BundleAutomation

The BundleAutomation message.

This message contains a oneof named conditions. Only a single field of the following list may be set at a time:
  - entitlements


## Example Usage

```typescript
import { BundleAutomation } from "conductorone-sdk-typescript/sdk/models/shared";

let value: BundleAutomation = {};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `circuitBreaker`                                                                                        | [shared.BundleAutomationCircuitBreaker](../../../sdk/models/shared/bundleautomationcircuitbreaker.md)   | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `createTasks`                                                                                           | *boolean*                                                                                               | :heavy_minus_sign:                                                                                      | The createTasks field.                                                                                  |
| `createdAt`                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)           | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `deletedAt`                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)           | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `disableCircuitBreaker`                                                                                 | *boolean*                                                                                               | :heavy_minus_sign:                                                                                      | The disableCircuitBreaker field.                                                                        |
| `enabled`                                                                                               | *boolean*                                                                                               | :heavy_minus_sign:                                                                                      | The enabled field.                                                                                      |
| `entitlements`                                                                                          | [shared.BundleAutomationRuleEntitlement](../../../sdk/models/shared/bundleautomationruleentitlement.md) | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `requestCatalogId`                                                                                      | *string*                                                                                                | :heavy_minus_sign:                                                                                      | The requestCatalogId field.                                                                             |
| `state`                                                                                                 | [shared.BundleAutomationLastRunState](../../../sdk/models/shared/bundleautomationlastrunstate.md)       | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `tenantId`                                                                                              | *string*                                                                                                | :heavy_minus_sign:                                                                                      | The tenantId field.                                                                                     |
| `updatedAt`                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)           | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |