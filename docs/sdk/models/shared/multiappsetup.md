# MultiAppSetup

The MultiAppSetup message.

## Example Usage

```typescript
import { MultiAppSetup } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MultiAppSetup = {};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `appEntitlementDetails`                                                                           | Record<string, [shared.EntitlementToDetails](../../../sdk/models/shared/entitlementtodetails.md)> | :heavy_minus_sign:                                                                                | The appEntitlementDetails field.                                                                  |
| `appEntitlements`                                                                                 | Record<string, [shared.MultiAppEntitlement](../../../sdk/models/shared/multiappentitlement.md)>   | :heavy_minus_sign:                                                                                | The appEntitlements field.                                                                        |