# AppResourceServiceGetResponse

The app resource service get response contains the app resource view and array of expanded items indicated by the request's expand mask.

## Example Usage

```typescript
import { AppResourceServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppResourceServiceGetResponse = {};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `appResourceView`                                                                                                     | [shared.AppResourceView](../../../sdk/models/shared/appresourceview.md)                                               | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |
| `expanded`                                                                                                            | [shared.AppResourceServiceGetResponseExpanded](../../../sdk/models/shared/appresourceservicegetresponseexpanded.md)[] | :heavy_minus_sign:                                                                                                    | List of serialized related objects.                                                                                   |