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

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `appUserFilter`                                                                                                                                                  | [shared.AppUserFilter](../../../sdk/models/shared/appuserfilter.md)                                                                                              | :heavy_minus_sign:                                                                                                                                               | The AppUserFilter message.                                                                                                                                       |
| `c1UserFilter`                                                                                                                                                   | [shared.C1UserFilter](../../../sdk/models/shared/c1userfilter.md)                                                                                                | :heavy_minus_sign:                                                                                                                                               | C1UserFilter is used to configure a picker for selecting ConductorOne users.<br/> This is distinct from AppUserFilter which selects accounts within a connected app. |
| `appResourceFilter`                                                                                                                                              | [shared.AppResourceFilter](../../../sdk/models/shared/appresourcefilter.md)                                                                                      | :heavy_minus_sign:                                                                                                                                               | The AppResourceFilter message.                                                                                                                                   |