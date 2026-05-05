# CreateManuallyManagedResourceTypeResponse

The response message for creating a manually managed resource type.

## Example Usage

```typescript
import { CreateManuallyManagedResourceTypeResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CreateManuallyManagedResourceTypeResponse = {};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `appResourceType`                                                                                                                             | [shared.AppResourceType](../../../sdk/models/shared/appresourcetype.md)                                                                       | :heavy_minus_sign:                                                                                                                            | N/A                                                                                                                                           |
| `expanded`                                                                                                                                    | [shared.CreateManuallyManagedResourceTypeResponseExpanded](../../../sdk/models/shared/createmanuallymanagedresourcetyperesponseexpanded.md)[] | :heavy_minus_sign:                                                                                                                            | List of serialized related objects.                                                                                                           |