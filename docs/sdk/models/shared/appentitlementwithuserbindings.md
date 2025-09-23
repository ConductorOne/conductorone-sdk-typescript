# AppEntitlementWithUserBindings

The AppEntitlementWithUserBindings message represents an app entitlement and its associated user bindings.

## Example Usage

```typescript
import { AppEntitlementWithUserBindings } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppEntitlementWithUserBindings = {};
```

## Fields

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `appEntitlementUserBindings`                                                                                                                | [shared.AppEntitlementUserBinding](../../../sdk/models/shared/appentitlementuserbinding.md)[]                                               | :heavy_minus_sign:                                                                                                                          | An array of AppEntitlementUserBinding objects which represent the relationships that give app users access to the specific app entitlement. |
| `entitlement`                                                                                                                               | [shared.AppEntitlementView](../../../sdk/models/shared/appentitlementview.md)                                                               | :heavy_minus_sign:                                                                                                                          | N/A                                                                                                                                         |