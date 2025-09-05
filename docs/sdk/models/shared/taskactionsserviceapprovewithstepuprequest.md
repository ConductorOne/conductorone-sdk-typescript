# TaskActionsServiceApproveWithStepUpRequest

TaskActionsServiceApproveWithStepUpRequest is used to approve a task with step-up authentication

## Example Usage

```typescript
import { TaskActionsServiceApproveWithStepUpRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskActionsServiceApproveWithStepUpRequest = {
  policyStepId: "<id>",
  stepUpTransactionId: "<id>",
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `comment`                                                                                                                                  | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | The comment attached to the request.                                                                                                       |
| `expandMask`                                                                                                                               | [shared.TaskExpandMask](../../../sdk/models/shared/taskexpandmask.md)                                                                      | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `policyStepId`                                                                                                                             | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | The ID of the policy step on the given task to approve.                                                                                    |
| `stepUpTransactionId`                                                                                                                      | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | The step-up transaction ID that was verified.<br/> If unset, the response will include a redirect URL to<br/> complete the step-up authentication. |