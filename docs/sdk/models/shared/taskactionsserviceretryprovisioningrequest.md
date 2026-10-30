# TaskActionsServiceRetryProvisioningRequest

Request to retry a task's failed connector provisioning.

## Example Usage

```typescript
import { TaskActionsServiceRetryProvisioningRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskActionsServiceRetryProvisioningRequest = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `comment`                                                             | *string*                                                              | :heavy_minus_sign:                                                    | An optional comment attached to the action.                           |
| `expandMask`                                                          | [shared.TaskExpandMask](../../../sdk/models/shared/taskexpandmask.md) | :heavy_minus_sign:                                                    | N/A                                                                   |
| `policyStepId`                                                        | *string*                                                              | :heavy_minus_sign:                                                    | The ID of the provision policy step to retry.                         |