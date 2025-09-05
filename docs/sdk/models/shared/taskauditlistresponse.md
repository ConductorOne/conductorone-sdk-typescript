# TaskAuditListResponse

The TaskAuditListResponse message.

## Example Usage

```typescript
import { TaskAuditListResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskAuditListResponse = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `list`                                                                | [shared.TaskAuditView](../../../sdk/models/shared/taskauditview.md)[] | :heavy_minus_sign:                                                    | The list field.                                                       |
| `nextPageToken`                                                       | *string*                                                              | :heavy_minus_sign:                                                    | The nextPageToken field.                                              |