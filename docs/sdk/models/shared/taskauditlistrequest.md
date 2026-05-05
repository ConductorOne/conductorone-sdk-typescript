# TaskAuditListRequest

The TaskAuditListRequest message.

## Example Usage

```typescript
import { TaskAuditListRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskAuditListRequest = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `pageSize`                                                                                    | *number*                                                                                      | :heavy_minus_sign:                                                                            | The maximum number of audit events to return per page.                                        |
| `pageToken`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | A pagination token from a previous response to retrieve the next page.                        |
| `refs`                                                                                        | [shared.TaskAuditViewRef](../../../sdk/models/shared/taskauditviewref.md)[]                   | :heavy_minus_sign:                                                                            | References to specific audit events to retrieve. If provided, only these events are returned. |
| `taskId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the task to list audit events for.                                                  |