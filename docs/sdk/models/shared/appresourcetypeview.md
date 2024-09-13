# AppResourceTypeView

The AppResourceTypeView message.

## Example Usage

```typescript
import { AppResourceTypeView } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppResourceTypeView = {};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `appPath`                                                                                                                | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | JSONPATH expression indicating the location of the App object in the  array                                              |
| `appResourceType`                                                                                                        | [shared.AppResourceType](../../../sdk/models/shared/appresourcetype.md)                                                  | :heavy_minus_sign:                                                                                                       | The AppResourceType is referenced by an app entitlement defining its resource types. Commonly things like Group or Role. |