# CreateAppEntitlementResponse

The CreateAppEntitlementResponse message.

## Example Usage

```typescript
import { CreateAppEntitlementResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CreateAppEntitlementResponse = {};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `appEntitlementView`                                                                                                     | [shared.AppEntitlementView](../../../sdk/models/shared/appentitlementview.md)                                            | :heavy_minus_sign:                                                                                                       | The app entitlement view contains the serialized app entitlement and paths to objects referenced by the app entitlement. |
| `expanded`                                                                                                               | [shared.CreateAppEntitlementResponseExpanded](../../../sdk/models/shared/createappentitlementresponseexpanded.md)[]      | :heavy_minus_sign:                                                                                                       | The expanded field.                                                                                                      |