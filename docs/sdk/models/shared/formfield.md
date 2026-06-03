# FormField

A field is a single input meant to collect a piece of data from a user

This message contains a oneof named type. Only a single field of the following list may be set at a time:
  - stringField
  - boolField
  - stringSliceField
  - int64Field
  - fileField
  - oauth2Field
  - stringMapField


This message contains a oneof named provider_config. Only a single field of the following list may be set at a time:
  - userConfig
  - adminConfig
  - sharedConfig


## Example Usage

```typescript
import { FormField } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FormField = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `adminConfig`                                                                     | [shared.AdminProviderConfig](../../../sdk/models/shared/adminproviderconfig.md)   | :heavy_minus_sign:                                                                | N/A                                                                               |
| `boolField`                                                                       | [shared.BoolField](../../../sdk/models/shared/boolfield.md)                       | :heavy_minus_sign:                                                                | N/A                                                                               |
| `description`                                                                     | *string*                                                                          | :heavy_minus_sign:                                                                | The description field.                                                            |
| `displayName`                                                                     | *string*                                                                          | :heavy_minus_sign:                                                                | The displayName field.                                                            |
| `fileField`                                                                       | [shared.FileField](../../../sdk/models/shared/filefield.md)                       | :heavy_minus_sign:                                                                | N/A                                                                               |
| `int64Field`                                                                      | [shared.Int64Field](../../../sdk/models/shared/int64field.md)                     | :heavy_minus_sign:                                                                | N/A                                                                               |
| `name`                                                                            | *string*                                                                          | :heavy_minus_sign:                                                                | The name field.                                                                   |
| `oauth2Field`                                                                     | [shared.Oauth2Field](../../../sdk/models/shared/oauth2field.md)                   | :heavy_minus_sign:                                                                | N/A                                                                               |
| `readOnly`                                                                        | *boolean*                                                                         | :heavy_minus_sign:                                                                | When true, this field is displayed to the user but cannot be edited.              |
| `required`                                                                        | *boolean*                                                                         | :heavy_minus_sign:                                                                | The required field.                                                               |
| `sharedConfig`                                                                    | [shared.SharedProviderConfig](../../../sdk/models/shared/sharedproviderconfig.md) | :heavy_minus_sign:                                                                | N/A                                                                               |
| `stringField`                                                                     | [shared.FormStringField](../../../sdk/models/shared/formstringfield.md)           | :heavy_minus_sign:                                                                | N/A                                                                               |
| `stringMapField`                                                                  | [shared.FormStringMapField](../../../sdk/models/shared/formstringmapfield.md)     | :heavy_minus_sign:                                                                | N/A                                                                               |
| `stringSliceField`                                                                | [shared.StringSliceField](../../../sdk/models/shared/stringslicefield.md)         | :heavy_minus_sign:                                                                | N/A                                                                               |
| `userConfig`                                                                      | [shared.UserProviderConfig](../../../sdk/models/shared/userproviderconfig.md)     | :heavy_minus_sign:                                                                | N/A                                                                               |