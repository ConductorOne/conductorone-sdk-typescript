# SendEmail

The SendEmail message.

## Example Usage

```typescript
import { SendEmail } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SendEmail = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `body`                                                                        | *string*                                                                      | :heavy_minus_sign:                                                            | The body field.                                                               |
| `subject`                                                                     | *string*                                                                      | :heavy_minus_sign:                                                            | The subject field.                                                            |
| `title`                                                                       | *string*                                                                      | :heavy_minus_sign:                                                            | The title field.                                                              |
| `useSubjectUser`                                                              | *boolean*                                                                     | :heavy_minus_sign:                                                            | If true, the step will use the subject user of the automation as the subject. |
| `userIdsCel`                                                                  | *string*                                                                      | :heavy_minus_sign:                                                            | The userIdsCel field.                                                         |
| `userRefs`                                                                    | [shared.UserRef](../../../sdk/models/shared/userref.md)[]                     | :heavy_minus_sign:                                                            | The userRefs field.                                                           |