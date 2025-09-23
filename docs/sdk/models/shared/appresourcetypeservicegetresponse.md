# AppResourceTypeServiceGetResponse

The AppResourceTypeServiceGetResponse contains an expanded array containing the expanded values indicated by the expand mask
 in the request and an app resource type view containing the resource type and JSONPATHs indicating which objects are where in the expand mask.

## Example Usage

```typescript
import { AppResourceTypeServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppResourceTypeServiceGetResponse = {};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `appResourceTypeView`                                                                                                         | [shared.AppResourceTypeView](../../../sdk/models/shared/appresourcetypeview.md)                                               | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           |
| `expanded`                                                                                                                    | [shared.AppResourceTypeServiceGetResponseExpanded](../../../sdk/models/shared/appresourcetypeservicegetresponseexpanded.md)[] | :heavy_minus_sign:                                                                                                            | List of serialized related objects.                                                                                           |