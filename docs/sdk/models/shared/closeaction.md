# CloseAction

The CloseAction message.

This message contains a oneof named user_identifier. Only a single field of the following list may be set at a time:
  - userIdCel
  - userRef


## Example Usage

```typescript
import { CloseAction } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CloseAction = {};
```

## Fields

| Field                                                                                                                                                   | Type                                                                                                                                                    | Required                                                                                                                                                | Description                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `useSubjectUser`                                                                                                                                        | *boolean*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                      | If true, the step will use the subject user of the automation as the subject.                                                                           |
| `userIdCel`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The userIdCel field.<br/>This field is part of the `user_identifier` oneof.<br/>See the documentation for `c1.api.automations.v1.CloseAction` for more details. |
| `userRef`                                                                                                                                               | [shared.UserRef](../../../sdk/models/shared/userref.md)                                                                                                 | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |