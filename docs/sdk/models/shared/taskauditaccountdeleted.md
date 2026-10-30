# TaskAuditAccountDeleted

TaskAuditAccountDeleted records an account deletion reported by a connector
 while completing a revoke action.

## Example Usage

```typescript
import { TaskAuditAccountDeleted } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskAuditAccountDeleted = {};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `appId`                        | *string*                       | :heavy_minus_sign:             | The appId field.               |
| `appUserId`                    | *string*                       | :heavy_minus_sign:             | The appUserId field.           |
| `connectorResourceId`          | *string*                       | :heavy_minus_sign:             | The connectorResourceId field. |
| `displayName`                  | *string*                       | :heavy_minus_sign:             | The displayName field.         |
| `email`                        | *string*                       | :heavy_minus_sign:             | The email field.               |
| `username`                     | *string*                       | :heavy_minus_sign:             | The username field.            |