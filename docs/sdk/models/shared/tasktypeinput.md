# TaskTypeInput

Task Type provides configuration for the type of task: certify, grant, or revoke

This message contains a oneof named task_type. Only a single field of the following list may be set at a time:
  - grant
  - revoke
  - certify
  - offboarding


## Example Usage

```typescript
import { TaskTypeInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskTypeInput = {};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `certify`                                                                                 | [shared.TaskTypeCertifyInput](../../../sdk/models/shared/tasktypecertifyinput.md)         | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `grant`                                                                                   | [shared.TaskTypeGrantInput](../../../sdk/models/shared/tasktypegrantinput.md)             | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `offboarding`                                                                             | [shared.TaskTypeOffboardingInput](../../../sdk/models/shared/tasktypeoffboardinginput.md) | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `revoke`                                                                                  | [shared.TaskTypeRevokeInput](../../../sdk/models/shared/tasktyperevokeinput.md)           | :heavy_minus_sign:                                                                        | N/A                                                                                       |