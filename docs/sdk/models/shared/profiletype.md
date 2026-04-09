# ProfileType

ProfileType represents a type of profile in the system

## Example Usage

```typescript
import { ProfileType } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ProfileType = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `description`                                                                               | *string*                                                                                    | :heavy_minus_sign:                                                                          | The description field.                                                                      |
| `displayToUser`                                                                             | *boolean*                                                                                   | :heavy_minus_sign:                                                                          | Whether to display this profile type to users in profile page. Defaults to false if not set |
| `iconUrl`                                                                                   | *string*                                                                                    | :heavy_minus_sign:                                                                          | The iconUrl field.                                                                          |
| `id`                                                                                        | *string*                                                                                    | :heavy_minus_sign:                                                                          | The id field.                                                                               |
| `name`                                                                                      | *string*                                                                                    | :heavy_minus_sign:                                                                          | The name field.                                                                             |
| `priority`                                                                                  | *number*                                                                                    | :heavy_minus_sign:                                                                          | The priority field.                                                                         |
| `sizes`                                                                                     | *number*[]                                                                                  | :heavy_minus_sign:                                                                          | icon sizes                                                                                  |
| `slug`                                                                                      | *string*                                                                                    | :heavy_minus_sign:                                                                          | Add this field to allow users to reference profile type in cel expressions                  |