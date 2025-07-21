# TaskAuditListRequest

The TaskAuditListRequest message.

## Example Usage

```typescript
import { TaskAuditListRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskAuditListRequest = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `pageSize`                                                                  | *number*                                                                    | :heavy_minus_sign:                                                          | The pageSize field.                                                         |
| `pageToken`                                                                 | *string*                                                                    | :heavy_minus_sign:                                                          | The pageToken field.                                                        |
| `refs`                                                                      | [shared.TaskAuditViewRef](../../../sdk/models/shared/taskauditviewref.md)[] | :heavy_minus_sign:                                                          | The refs field.                                                             |
| `taskId`                                                                    | *string*                                                                    | :heavy_minus_sign:                                                          | The taskId field.                                                           |