# SendSlackMessage

SendSlackMessage posts to a channel or DMs one or more users. Delivery mode is
 inferred from which fields are populated: DM if any user field is set
 (use_subject_user, user_ids_cel, user_refs), otherwise channel. Priority for DM
 recipient resolution: use_subject_user > user_ids_cel > user_refs.

This message contains a oneof named channel. Only a single field of the following list may be set at a time:
  - channelName
  - channelNameCel


## Example Usage

```typescript
import { SendSlackMessage } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SendSlackMessage = {};
```

## Fields

| Field                                                                                                                                                     | Type                                                                                                                                                      | Required                                                                                                                                                  | Description                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `body`                                                                                                                                                    | *string*                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                        | The body field.                                                                                                                                           |
| `channelName`                                                                                                                                             | *string*                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                        | The channelName field.<br/>This field is part of the `channel` oneof.<br/>See the documentation for `c1.api.automations.v1.SendSlackMessage` for more details. |
| `channelNameCel`                                                                                                                                          | *string*                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                        | The channelNameCel field.<br/>This field is part of the `channel` oneof.<br/>See the documentation for `c1.api.automations.v1.SendSlackMessage` for more details. |
| `useSubjectUser`                                                                                                                                          | *boolean*                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                        | The useSubjectUser field.                                                                                                                                 |
| `userIdsCel`                                                                                                                                              | *string*                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                        | The userIdsCel field.                                                                                                                                     |
| `userRefs`                                                                                                                                                | [shared.UserRef](../../../sdk/models/shared/userref.md)[]                                                                                                 | :heavy_minus_sign:                                                                                                                                        | The userRefs field.                                                                                                                                       |