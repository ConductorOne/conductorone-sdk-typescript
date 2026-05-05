# TaskAuditNewTaskCreatedFrom

TaskAuditNewTaskCreatedFrom is used when a task is created from another task
 (e.g. when a replacement extension grant task is created after the original is cancelled).
 This is set on the NEW task to indicate its origin.

## Example Usage

```typescript
import { TaskAuditNewTaskCreatedFrom } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskAuditNewTaskCreatedFrom = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `originalTaskId`                                                        | *string*                                                                | :heavy_minus_sign:                                                      | The originalTaskId field.                                               |
| `originalTaskNumericId`                                                 | *number*                                                                | :heavy_minus_sign:                                                      | The originalTaskNumericId field.                                        |
| `originalTaskType`                                                      | *string*                                                                | :heavy_minus_sign:                                                      | The task type of the original task (e.g. "grant", "revoke", "certify"). |