# TaskActionsServiceReassignRequest

The TaskActionsServiceReassignRequest message.

## Example Usage

```typescript
import { TaskActionsServiceReassignRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskActionsServiceReassignRequest = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `comment`                                                             | *string*                                                              | :heavy_minus_sign:                                                    | The comment field.                                                    |
| `expandMask`                                                          | [shared.TaskExpandMask](../../../sdk/models/shared/taskexpandmask.md) | :heavy_minus_sign:                                                    | N/A                                                                   |
| `newStepUserIds`                                                      | *string*[]                                                            | :heavy_minus_sign:                                                    | The newStepUserIds field.                                             |
| `policyStepId`                                                        | *string*                                                              | :heavy_minus_sign:                                                    | The policyStepId field.                                               |