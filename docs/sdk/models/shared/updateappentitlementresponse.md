# UpdateAppEntitlementResponse

The UpdateAppEntitlementResponse message.

## Example Usage

```typescript
import { UpdateAppEntitlementResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UpdateAppEntitlementResponse = {};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `appEntitlementView`                                                                                                     | [shared.AppEntitlementView](../../../sdk/models/shared/appentitlementview.md)                                            | :heavy_minus_sign:                                                                                                       | The app entitlement view contains the serialized app entitlement and paths to objects referenced by the app entitlement. |
| `expanded`                                                                                                               | [shared.UpdateAppEntitlementResponseExpanded](../../../sdk/models/shared/updateappentitlementresponseexpanded.md)[]      | :heavy_minus_sign:                                                                                                       | List of related objects                                                                                                  |