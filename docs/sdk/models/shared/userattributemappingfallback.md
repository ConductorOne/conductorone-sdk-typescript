# UserAttributeMappingFallback

The UserAttributeMappingFallback message.

This message contains a oneof named fallback. Only a single field of the following list may be set at a time:
  - app
  - appUserProfile
  - celExpression


## Example Usage

```typescript
import { UserAttributeMappingFallback } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UserAttributeMappingFallback = {};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `app`                                                                                                               | [shared.UserAttributeTypeConfigApp](../../../sdk/models/shared/userattributetypeconfigapp.md)                       | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |
| `appUserProfile`                                                                                                    | [shared.UserAttributeTypeConfigAppUserProfile](../../../sdk/models/shared/userattributetypeconfigappuserprofile.md) | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |
| `celExpression`                                                                                                     | [shared.UserAttributeTypeConfigCelExpression](../../../sdk/models/shared/userattributetypeconfigcelexpression.md)   | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |