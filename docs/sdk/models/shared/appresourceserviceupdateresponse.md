# AppResourceServiceUpdateResponse

The response message for updating an app resource.

## Example Usage

```typescript
import { AppResourceServiceUpdateResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppResourceServiceUpdateResponse = {};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `appResourceView`                                                                                                           | [shared.AppResourceView](../../../sdk/models/shared/appresourceview.md)                                                     | :heavy_minus_sign:                                                                                                          | N/A                                                                                                                         |
| `expanded`                                                                                                                  | [shared.AppResourceServiceUpdateResponseExpanded](../../../sdk/models/shared/appresourceserviceupdateresponseexpanded.md)[] | :heavy_minus_sign:                                                                                                          | List of serialized related objects.                                                                                         |