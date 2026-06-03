# AppEntitlementWithUserBinding

The AppEntitlementWithUserBinding message.

## Example Usage

```typescript
import { AppEntitlementWithUserBinding } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppEntitlementWithUserBinding = {};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `appEntitlementUserView`                                                                                                                                           | [shared.AppEntitlementUserView](../../../sdk/models/shared/appentitlementuserview.md)                                                                              | :heavy_minus_sign:                                                                                                                                                 | The AppEntitlementUserView (aka grant view) describes the relationship between an app user and an entitlement. They have more recently been referred to as grants. |
| `appEntitlementView`                                                                                                                                               | [shared.AppEntitlementView](../../../sdk/models/shared/appentitlementview.md)                                                                                      | :heavy_minus_sign:                                                                                                                                                 | The app entitlement view contains the serialized app entitlement and paths to objects referenced by the app entitlement.                                           |