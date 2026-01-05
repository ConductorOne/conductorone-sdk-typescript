# PickerField

The PickerField message.

This message contains a oneof named type. Only a single field of the following list may be set at a time:
  - appUserPicker
  - resourcePicker


## Example Usage

```typescript
import { PickerField } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PickerField = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `appUserFilter`                                                             | [shared.AppUserFilter](../../../sdk/models/shared/appuserfilter.md)         | :heavy_minus_sign:                                                          | The AppUserFilter message.                                                  |
| `appResourceFilter`                                                         | [shared.AppResourceFilter](../../../sdk/models/shared/appresourcefilter.md) | :heavy_minus_sign:                                                          | The AppResourceFilter message.                                              |