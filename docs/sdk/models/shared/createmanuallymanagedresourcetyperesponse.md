# CreateManuallyManagedResourceTypeResponse

The CreateManuallyManagedResourceTypeResponse message.

## Example Usage

```typescript
import { CreateManuallyManagedResourceTypeResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CreateManuallyManagedResourceTypeResponse = {};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `appResourceType`                                                                                                                             | [shared.AppResourceType](../../../sdk/models/shared/appresourcetype.md)                                                                       | :heavy_minus_sign:                                                                                                                            | The AppResourceType is referenced by an app entitlement defining its resource types. Commonly things like Group or Role.                      |
| `expanded`                                                                                                                                    | [shared.CreateManuallyManagedResourceTypeResponseExpanded](../../../sdk/models/shared/createmanuallymanagedresourcetyperesponseexpanded.md)[] | :heavy_minus_sign:                                                                                                                            | The expanded field.                                                                                                                           |