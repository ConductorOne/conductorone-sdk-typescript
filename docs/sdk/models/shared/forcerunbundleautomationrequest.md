# ForceRunBundleAutomationRequest

The request message for triggering an immediate bundle automation run.

## Example Usage

```typescript
import { ForceRunBundleAutomationRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ForceRunBundleAutomationRequest = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `refs`                                                                        | [shared.AppEntitlementRef](../../../sdk/models/shared/appentitlementref.md)[] | :heavy_minus_sign:                                                            | Optional entitlement references to scope the run to specific entitlements.    |