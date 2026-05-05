# DeleteAppEntitlementMonitorBindingRequest

The request message for deleting an app entitlement monitor binding.

## Example Usage

```typescript
import { DeleteAppEntitlementMonitorBindingRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DeleteAppEntitlementMonitorBindingRequest = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `appEntitlementId`                                                        | *string*                                                                  | :heavy_minus_sign:                                                        | The unique identifier of the app entitlement to unbind.                   |
| `appId`                                                                   | *string*                                                                  | :heavy_minus_sign:                                                        | The unique identifier of the application containing the entitlement.      |
| `entitlementGroup`                                                        | [shared.EntitlementGroup](../../../sdk/models/shared/entitlementgroup.md) | :heavy_minus_sign:                                                        | Which side of the conflict monitor (A or B) the binding belongs to.       |
| `monitorId`                                                               | *string*                                                                  | :heavy_minus_sign:                                                        | The unique identifier of the conflict monitor.                            |