# AppResourceServiceUpdateRequest

The AppResourceServiceUpdateRequest message.

## Example Usage

```typescript
import { AppResourceServiceUpdateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppResourceServiceUpdateRequest = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `appResource`                                                                                 | [shared.AppResourceInput](../../../sdk/models/shared/appresourceinput.md)                     | :heavy_minus_sign:                                                                            | The app resource message is a single resource that can have entitlements.                     |
| `appResourceExpandMask`                                                                       | [shared.AppResourceExpandMask](../../../sdk/models/shared/appresourceexpandmask.md)           | :heavy_minus_sign:                                                                            | The app resource expand mask lets you get information about related objects from the request. |
| `updateMask`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |