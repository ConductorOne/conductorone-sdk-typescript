# AppEntitlementView

The app entitlement view contains the serialized app entitlement and paths to objects referenced by the app entitlement.

## Example Usage

```typescript
import { AppEntitlementView } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppEntitlementView = {};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `appEntitlement`                                                                                   | [shared.AppEntitlement](../../../sdk/models/shared/appentitlement.md)                              | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `appPath`                                                                                          | *string*                                                                                           | :heavy_minus_sign:                                                                                 | JSONPATH expression indicating the location of the App object in the  array.                       |
| `appResourcePath`                                                                                  | *string*                                                                                           | :heavy_minus_sign:                                                                                 | JSONPATH expression indicating the location of the App Resource Type object in the expanded array. |
| `appResourceTypePath`                                                                              | *string*                                                                                           | :heavy_minus_sign:                                                                                 | JSONPATH expression indicating the location of the App Resource object in the  array.              |