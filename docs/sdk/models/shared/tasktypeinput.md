# TaskTypeInput

Task Type provides configuration for the type of task: certify, grant, or revoke

This message contains a oneof named task_type. Only a single field of the following list may be set at a time:
  - grant
  - revoke
  - certify
  - offboarding
  - action
  - finding


## Example Usage

```typescript
import { TaskTypeInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskTypeInput = {};
```

## Fields

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `taskTypeAction`                                                                                                                                               | [shared.TaskTypeActionInput](../../../sdk/models/shared/tasktypeactioninput.md)                                                                                | :heavy_minus_sign:                                                                                                                                             | The TaskTypeAction message.<br/><br/>This message contains a oneof named target_object. Only a single field of the following list may be set at a time:<br/>  - scopeRole<br/> |
| `certify`                                                                                                                                                      | [shared.TaskTypeCertifyInput](../../../sdk/models/shared/tasktypecertifyinput.md)                                                                              | :heavy_minus_sign:                                                                                                                                             | N/A                                                                                                                                                            |
| `taskTypeFinding`                                                                                                                                              | [shared.TaskTypeFindingInput](../../../sdk/models/shared/tasktypefindinginput.md)                                                                              | :heavy_minus_sign:                                                                                                                                             | The TaskTypeFinding message.                                                                                                                                   |
| `grant`                                                                                                                                                        | [shared.TaskTypeGrantInput](../../../sdk/models/shared/tasktypegrantinput.md)                                                                                  | :heavy_minus_sign:                                                                                                                                             | N/A                                                                                                                                                            |
| `offboarding`                                                                                                                                                  | [shared.TaskTypeOffboardingInput](../../../sdk/models/shared/tasktypeoffboardinginput.md)                                                                      | :heavy_minus_sign:                                                                                                                                             | N/A                                                                                                                                                            |
| `revoke`                                                                                                                                                       | [shared.TaskTypeRevokeInput](../../../sdk/models/shared/tasktyperevokeinput.md)                                                                                | :heavy_minus_sign:                                                                                                                                             | N/A                                                                                                                                                            |