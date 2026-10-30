# UserAttributeManagementServiceUpdateRequest

The UserAttributeManagementServiceUpdateRequest message.

## Example Usage

```typescript
import { UserAttributeManagementServiceUpdateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UserAttributeManagementServiceUpdateRequest = {
  attributeType: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `attributeType`                                                                                           | [shared.UserAttributeType](../../../sdk/models/shared/userattributetype.md)                               | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `expandMask`                                                                                              | [shared.UserAttributeMapConfigExpandMask](../../../sdk/models/shared/userattributemapconfigexpandmask.md) | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `fallbacks`                                                                                               | [shared.UserAttributeMappingFallback](../../../sdk/models/shared/userattributemappingfallback.md)[]       | :heavy_minus_sign:                                                                                        | The fallbacks field.                                                                                      |
| `profileTypeIds`                                                                                          | *string*[]                                                                                                | :heavy_minus_sign:                                                                                        | The profileTypeIds field.                                                                                 |
| `updateMask`                                                                                              | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |