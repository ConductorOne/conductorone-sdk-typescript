# TaskAuditWebhookSuccess

The TaskAuditWebhookSuccess message.

## Example Usage

```typescript
import { TaskAuditWebhookSuccess } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskAuditWebhookSuccess = {};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `comment`                                               | *string*                                                | :heavy_minus_sign:                                      | Optional comment supplied by the provisioning callback. |
| `webhookId`                                             | *string*                                                | :heavy_minus_sign:                                      | The webhookId field.                                    |
| `webhookInstanceId`                                     | *string*                                                | :heavy_minus_sign:                                      | The webhookInstanceId field.                            |
| `webhookName`                                           | *string*                                                | :heavy_minus_sign:                                      | The webhookName field.                                  |
| `webhookUrl`                                            | *string*                                                | :heavy_minus_sign:                                      | The webhookUrl field.                                   |