# AppResourceExpandMask

The app resource expand mask lets you get information about related objects from the request.

## Example Usage

```typescript
import { AppResourceExpandMask } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppResourceExpandMask = {};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `paths`                                                                                              | *string*[]                                                                                           | :heavy_minus_sign:                                                                                   | The app resource expanded fields. Maybe be any combination of "*", "app_id", "app_resource_type_id". |