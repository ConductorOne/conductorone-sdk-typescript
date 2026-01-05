# TaskType

Task Type provides configuration for the type of task: certify, grant, or revoke

This message contains a oneof named task_type. Only a single field of the following list may be set at a time:
  - grant
  - revoke
  - certify
  - offboarding
  - action


## Example Usage

```typescript
import { TaskType } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskType = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `taskTypeAction`                                                                | [shared.TaskTypeAction](../../../sdk/models/shared/tasktypeaction.md)           | :heavy_minus_sign:                                                              | The TaskTypeAction message.                                                     |
| `certify`                                                                       | [shared.TaskTypeCertify](../../../sdk/models/shared/tasktypecertify.md)         | :heavy_minus_sign:                                                              | N/A                                                                             |
| `grant`                                                                         | [shared.TaskTypeGrant](../../../sdk/models/shared/tasktypegrant.md)             | :heavy_minus_sign:                                                              | N/A                                                                             |
| `offboarding`                                                                   | [shared.TaskTypeOffboarding](../../../sdk/models/shared/tasktypeoffboarding.md) | :heavy_minus_sign:                                                              | N/A                                                                             |
| `revoke`                                                                        | [shared.TaskTypeRevoke](../../../sdk/models/shared/tasktyperevoke.md)           | :heavy_minus_sign:                                                              | N/A                                                                             |