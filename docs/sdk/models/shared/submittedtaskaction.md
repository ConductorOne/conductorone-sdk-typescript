# SubmittedTaskAction

Represents a single action that was performed on a task.

## Example Usage

```typescript
import { SubmittedTaskAction } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SubmittedTaskAction = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `actionType`                                                                                  | [shared.ActionType](../../../sdk/models/shared/actiontype.md)                                 | :heavy_minus_sign:                                                                            | The type of action that was performed.                                                        |
| `bulkActionId`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the bulk action this action belongs to, if it was part of a bulk operation.         |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `deletedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The unique ID of this action.                                                                 |
| `policyStepId`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the policy step this action was performed on.                                       |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `userId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the user who performed the action.                                                  |