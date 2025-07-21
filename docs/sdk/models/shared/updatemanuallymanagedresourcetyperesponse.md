# UpdateManuallyManagedResourceTypeResponse

The UpdateManuallyManagedResourceTypeResponse message.

## Example Usage

```typescript
import { UpdateManuallyManagedResourceTypeResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UpdateManuallyManagedResourceTypeResponse = {};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `appResourceType`                                                                                                                             | [shared.AppResourceType](../../../sdk/models/shared/appresourcetype.md)                                                                       | :heavy_minus_sign:                                                                                                                            | The AppResourceType is referenced by an app entitlement defining its resource types. Commonly things like Group or Role.                      |
| `expanded`                                                                                                                                    | [shared.UpdateManuallyManagedResourceTypeResponseExpanded](../../../sdk/models/shared/updatemanuallymanagedresourcetyperesponseexpanded.md)[] | :heavy_minus_sign:                                                                                                                            | The expanded field.                                                                                                                           |