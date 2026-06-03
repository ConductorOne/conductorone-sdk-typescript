# TaskAuditActionSubmitted

The TaskAuditActionSubmitted message.

## Example Usage

```typescript
import { TaskAuditActionSubmitted } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskAuditActionSubmitted = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `submittedTaskAction`                                                           | [shared.SubmittedTaskAction](../../../sdk/models/shared/submittedtaskaction.md) | :heavy_minus_sign:                                                              | Represents a single action that was performed on a task.                        |