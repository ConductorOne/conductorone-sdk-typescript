# TaskType

Task Type provides configuration for the type of task: certify, grant, or revoke

This message contains a oneof named task_type. Only a single field of the following list may be set at a time:
  - grant
  - revoke
  - certify
  - offboarding


## Example Usage

```typescript
import { TaskType } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskType = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `taskTypeCertify`                                                                            | [shared.TaskTypeCertify](../../../sdk/models/shared/tasktypecertify.md)                      | :heavy_minus_sign:                                                                           | The TaskTypeCertify message indicates that a task is a certify task and all related details. |
| `taskTypeGrant`                                                                              | [shared.TaskTypeGrant](../../../sdk/models/shared/tasktypegrant.md)                          | :heavy_minus_sign:                                                                           | The TaskTypeGrant message indicates that a task is a grant task and all related details.     |
| `taskTypeOffboarding`                                                                        | [shared.TaskTypeOffboarding](../../../sdk/models/shared/tasktypeoffboarding.md)              | :heavy_minus_sign:                                                                           | The TaskTypeOffboarding message.                                                             |
| `taskTypeRevoke`                                                                             | [shared.TaskTypeRevoke](../../../sdk/models/shared/tasktyperevoke.md)                        | :heavy_minus_sign:                                                                           | The TaskTypeRevoke message indicates that a task is a revoke task and all related details.   |