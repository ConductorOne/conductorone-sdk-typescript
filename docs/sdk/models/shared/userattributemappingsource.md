# UserAttributeMappingSource

The UserAttributeMappingSource message.

## Example Usage

```typescript
import { UserAttributeMappingSource } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UserAttributeMappingSource = {};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `appId`                                                             | *string*                                                            | :heavy_minus_sign:                                                  | The appId field.                                                    |
| `appUserId`                                                         | *string*                                                            | :heavy_minus_sign:                                                  | The appUserId field.                                                |
| `appUserProfileAttributeKey`                                        | *string*                                                            | :heavy_minus_sign:                                                  | The appUserProfileAttributeKey field.                               |
| `priority`                                                          | *number*                                                            | :heavy_minus_sign:                                                  | Lower number = higher precedence; sources[0] is the winning source. |
| `userAttributeMappingId`                                            | *string*                                                            | :heavy_minus_sign:                                                  | The userAttributeMappingId field.                                   |
| `value`                                                             | *string*                                                            | :heavy_minus_sign:                                                  | The value field.                                                    |