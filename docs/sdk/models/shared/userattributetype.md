# UserAttributeType

The UserAttributeType message.

This message contains a oneof named config. Only a single field of the following list may be set at a time:
  - app
  - appUserProfile
  - customAppUserProfile
  - celExpression


## Example Usage

```typescript
import { UserAttributeType } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UserAttributeType = {
  id: "<id>",
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `app`                                                                                                                           | [shared.UserAttributeTypeConfigApp](../../../sdk/models/shared/userattributetypeconfigapp.md)                                   | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |
| `appUserProfile`                                                                                                                | [shared.UserAttributeTypeConfigAppUserProfile](../../../sdk/models/shared/userattributetypeconfigappuserprofile.md)             | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |
| `celExpression`                                                                                                                 | [shared.UserAttributeTypeConfigCelExpression](../../../sdk/models/shared/userattributetypeconfigcelexpression.md)               | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |
| `customAppUserProfile`                                                                                                          | [shared.UserAttributeTypeConfigCustomAppUserProfile](../../../sdk/models/shared/userattributetypeconfigcustomappuserprofile.md) | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |
| `displayName`                                                                                                                   | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | The displayName field.                                                                                                          |
| `id`                                                                                                                            | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | The id field.                                                                                                                   |