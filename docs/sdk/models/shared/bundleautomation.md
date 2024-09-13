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
| `createdAt`                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)           | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `deletedAt`                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)           | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `enabled`                                                                                               | *boolean*                                                                                               | :heavy_minus_sign:                                                                                      | The enabled field.                                                                                      |
| `bundleAutomationRuleEntitlement`                                                                       | [shared.BundleAutomationRuleEntitlement](../../../sdk/models/shared/bundleautomationruleentitlement.md) | :heavy_minus_sign:                                                                                      | The BundleAutomationRuleEntitlement message.                                                            |
| `requestCatalogId`                                                                                      | *string*                                                                                                | :heavy_minus_sign:                                                                                      | The requestCatalogId field.                                                                             |
| `bundleAutomationLastRunState`                                                                          | [shared.BundleAutomationLastRunState](../../../sdk/models/shared/bundleautomationlastrunstate.md)       | :heavy_minus_sign:                                                                                      | The BundleAutomationLastRunState message.                                                               |
| `tenantId`                                                                                              | *string*                                                                                                | :heavy_minus_sign:                                                                                      | The tenantId field.                                                                                     |
| `updatedAt`                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)           | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |