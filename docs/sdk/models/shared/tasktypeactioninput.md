# TaskTypeActionInput

The TaskTypeAction message.

This message contains a oneof named target_object. Only a single field of the following list may be set at a time:
  - scopeRole
  - toolCall
  - finding
  - credentialIssue
  - accessProfileComponent


## Example Usage

```typescript
import { TaskTypeActionInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskTypeActionInput = {};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `accessProfileComponent`                                                                                    | [shared.AccessProfileComponentTargetInput](../../../sdk/models/shared/accessprofilecomponenttargetinput.md) | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `actionInstance`                                                                                            | [shared.TaskActionInstanceInput](../../../sdk/models/shared/taskactioninstanceinput.md)                     | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `credentialIssue`                                                                                           | [shared.CredentialIssueTargetInput](../../../sdk/models/shared/credentialissuetargetinput.md)               | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `finding`                                                                                                   | [shared.FindingTargetInput](../../../sdk/models/shared/findingtargetinput.md)                               | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `scopeRole`                                                                                                 | [shared.ScopeRoleInput](../../../sdk/models/shared/scoperoleinput.md)                                       | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `source`                                                                                                    | [shared.TaskActionSourceInput](../../../sdk/models/shared/taskactionsourceinput.md)                         | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `toolCall`                                                                                                  | [shared.GatedToolCallTargetInput](../../../sdk/models/shared/gatedtoolcalltargetinput.md)                   | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |