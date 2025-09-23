# GetAppEntitlementResponse

The get app entitlement response returns an entitlement view containing paths in the expanded array for the objects expanded as indicated by the expand mask in the request.

## Example Usage

```typescript
import { GetAppEntitlementResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GetAppEntitlementResponse = {};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `appEntitlementView`                                                                                          | [shared.AppEntitlementView](../../../sdk/models/shared/appentitlementview.md)                                 | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `expanded`                                                                                                    | [shared.GetAppEntitlementResponseExpanded](../../../sdk/models/shared/getappentitlementresponseexpanded.md)[] | :heavy_minus_sign:                                                                                            | List of serialized related objects.                                                                           |