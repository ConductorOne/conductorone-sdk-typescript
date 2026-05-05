# AppResourceServiceUpdateRequest

The request message for updating an app resource.

## Example Usage

```typescript
import { AppResourceServiceUpdateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppResourceServiceUpdateRequest = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `appResource`                                                                       | [shared.AppResourceInput](../../../sdk/models/shared/appresourceinput.md)           | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `expandMask`                                                                        | [shared.AppResourceExpandMask](../../../sdk/models/shared/appresourceexpandmask.md) | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `updateMask`                                                                        | *string*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 |