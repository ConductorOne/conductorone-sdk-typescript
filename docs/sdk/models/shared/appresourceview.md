# AppResourceView

The app resource view returns an app resource with paths for items in the expand mask filled in when this response is returned and a request expand mask has "*" or "app_id" or "resource_type_id".

## Example Usage

```typescript
import { AppResourceView } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppResourceView = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `appPath`                                                                                   | *string*                                                                                    | :heavy_minus_sign:                                                                          | JSONPATH expression indicating the location of the App object in the array                  |
| `appResource`                                                                               | [shared.AppResource](../../../sdk/models/shared/appresource.md)                             | :heavy_minus_sign:                                                                          | The app resource message is a single resource that can have entitlements.                   |
| `parentResourcePath`                                                                        | *string*                                                                                    | :heavy_minus_sign:                                                                          | JSONPATH expression indicating the location of the Parent Resource object in the array      |
| `parentResourceTypePath`                                                                    | *string*                                                                                    | :heavy_minus_sign:                                                                          | JSONPATH expression indicating the location of the Parent Resource Type object in the array |
| `resourceTypePath`                                                                          | *string*                                                                                    | :heavy_minus_sign:                                                                          | JSONPATH expression indicating the location of the Resource Type object in the array        |