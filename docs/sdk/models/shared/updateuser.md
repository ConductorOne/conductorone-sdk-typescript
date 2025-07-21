# UpdateUser

The UpdateUser message.

This message contains a oneof named user. Only a single field of the following list may be set at a time:
  - userIdCel
  - userRef


This message contains a oneof named user_status. Only a single field of the following list may be set at a time:
  - userStatusEnum
  - userStatusCel


## Example Usage

```typescript
import { UpdateUser } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UpdateUser = {};
```

## Fields

| Field                                                                                                                                                   | Type                                                                                                                                                    | Required                                                                                                                                                | Description                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `useSubjectUser`                                                                                                                                        | *boolean*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                      | If true, the step will use the subject user of the automation as the subject.                                                                           |
| `userIdCel`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The userIdCel field.<br/>This field is part of the `user` oneof.<br/>See the documentation for `c1.api.automations.v1.UpdateUser` for more details.     |
| `userRef`                                                                                                                                               | [shared.UserRef](../../../sdk/models/shared/userref.md)                                                                                                 | :heavy_minus_sign:                                                                                                                                      | A reference to a user.                                                                                                                                  |
| `userStatusCel`                                                                                                                                         | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The userStatusCel field.<br/>This field is part of the `user_status` oneof.<br/>See the documentation for `c1.api.automations.v1.UpdateUser` for more details. |
| `userStatusEnum`                                                                                                                                        | [shared.UserStatusEnum](../../../sdk/models/shared/userstatusenum.md)                                                                                   | :heavy_minus_sign:                                                                                                                                      | The userStatusEnum field.<br/>This field is part of the `user_status` oneof.<br/>See the documentation for `c1.api.automations.v1.UpdateUser` for more details. |