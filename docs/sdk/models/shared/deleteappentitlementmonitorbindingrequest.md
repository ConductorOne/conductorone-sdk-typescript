# DeleteAppEntitlementMonitorBindingRequest

The DeleteAppEntitlementMonitorBindingRequest message.

## Example Usage

```typescript
import { DeleteAppEntitlementMonitorBindingRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DeleteAppEntitlementMonitorBindingRequest = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `appEntitlementId`                                                        | *string*                                                                  | :heavy_minus_sign:                                                        | The appEntitlementId field.                                               |
| `appId`                                                                   | *string*                                                                  | :heavy_minus_sign:                                                        | The appId field.                                                          |
| `entitlementGroup`                                                        | [shared.EntitlementGroup](../../../sdk/models/shared/entitlementgroup.md) | :heavy_minus_sign:                                                        | The entitlementGroup field.                                               |
| `monitorId`                                                               | *string*                                                                  | :heavy_minus_sign:                                                        | The monitorId field.                                                      |