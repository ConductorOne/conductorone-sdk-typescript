# CreateBundleAutomationRequest

The CreateBundleAutomationRequest message.

This message contains a oneof named conditions. Only a single field of the following list may be set at a time:
  - entitlements


## Example Usage

```typescript
import { CreateBundleAutomationRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CreateBundleAutomationRequest = {};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `createTasks`                                                                                           | *boolean*                                                                                               | :heavy_minus_sign:                                                                                      | The createTasks field.                                                                                  |
| `enabled`                                                                                               | *boolean*                                                                                               | :heavy_minus_sign:                                                                                      | The enabled field.                                                                                      |
| `bundleAutomationRuleEntitlement`                                                                       | [shared.BundleAutomationRuleEntitlement](../../../sdk/models/shared/bundleautomationruleentitlement.md) | :heavy_minus_sign:                                                                                      | The BundleAutomationRuleEntitlement message.                                                            |