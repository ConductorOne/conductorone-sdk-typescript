# TaskRevokeSourceRequest

The TaskRevokeSourceRequest message indicates that the source of the revoke task was a request.

## Example Usage

```typescript
import { TaskRevokeSourceRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskRevokeSourceRequest = {};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `requestUserId`                                      | *string*                                             | :heavy_minus_sign:                                   | The ID of the user who initiated the revoke request. |