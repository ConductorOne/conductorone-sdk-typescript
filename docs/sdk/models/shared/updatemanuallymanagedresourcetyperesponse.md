# UpdateManuallyManagedResourceTypeResponse

The response message for updating a manually managed resource type.

## Example Usage

```typescript
import { UpdateManuallyManagedResourceTypeResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UpdateManuallyManagedResourceTypeResponse = {};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `appResourceType`                                                                                                                             | [shared.AppResourceType](../../../sdk/models/shared/appresourcetype.md)                                                                       | :heavy_minus_sign:                                                                                                                            | N/A                                                                                                                                           |
| `expanded`                                                                                                                                    | [shared.UpdateManuallyManagedResourceTypeResponseExpanded](../../../sdk/models/shared/updatemanuallymanagedresourcetyperesponseexpanded.md)[] | :heavy_minus_sign:                                                                                                                            | List of serialized related objects.                                                                                                           |