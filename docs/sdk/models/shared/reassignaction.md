# ReassignAction

The ReassignAction message.

This message contains a oneof named assignee_user_identifier. Only a single field of the following list may be set at a time:
  - assigneeUserIdCel
  - assigneeUserRef


This message contains a oneof named subject_user_identifier. Only a single field of the following list may be set at a time:
  - subjectUserIdCel
  - subjectUserRef


## Example Usage

```typescript
import { ReassignAction } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ReassignAction = {};
```

## Fields

| Field                                                                                                                                                                       | Type                                                                                                                                                                        | Required                                                                                                                                                                    | Description                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `assigneeUserIdCel`                                                                                                                                                         | *string*                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                          | The assigneeUserIdCel field.<br/>This field is part of the `assignee_user_identifier` oneof.<br/>See the documentation for `c1.api.automations.v1.ReassignAction` for more details. |
| `assigneeUserRef`                                                                                                                                                           | [shared.UserRef](../../../sdk/models/shared/userref.md)                                                                                                                     | :heavy_minus_sign:                                                                                                                                                          | N/A                                                                                                                                                                         |
| `subjectUserIdCel`                                                                                                                                                          | *string*                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                          | The subjectUserIdCel field.<br/>This field is part of the `subject_user_identifier` oneof.<br/>See the documentation for `c1.api.automations.v1.ReassignAction` for more details. |
| `subjectUserRef`                                                                                                                                                            | [shared.UserRef](../../../sdk/models/shared/userref.md)                                                                                                                     | :heavy_minus_sign:                                                                                                                                                          | N/A                                                                                                                                                                         |
| `useSubjectUser`                                                                                                                                                            | *boolean*                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                          | If true, the step will use the subject user of the automation as the subject.                                                                                               |