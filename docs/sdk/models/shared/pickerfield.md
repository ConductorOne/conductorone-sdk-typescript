# PickerField

The PickerField message.

This message contains a oneof named type. Only a single field of the following list may be set at a time:
  - appUserPicker
  - resourcePicker
  - c1UserPicker


## Example Usage

```typescript
import { PickerField } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PickerField = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `appUserPicker`                                                             | [shared.AppUserFilter](../../../sdk/models/shared/appuserfilter.md)         | :heavy_minus_sign:                                                          | N/A                                                                         |
| `c1UserPicker`                                                              | [shared.C1UserFilter](../../../sdk/models/shared/c1userfilter.md)           | :heavy_minus_sign:                                                          | N/A                                                                         |
| `resourcePicker`                                                            | [shared.AppResourceFilter](../../../sdk/models/shared/appresourcefilter.md) | :heavy_minus_sign:                                                          | N/A                                                                         |