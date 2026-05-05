# WebhookEndpoint

The Webhook message.

## Example Usage

```typescript
import { WebhookEndpoint } from "conductorone-sdk-typescript/sdk/models/shared";

let value: WebhookEndpoint = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `callbackTimeout`                                                                             | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `deletedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | An optional description of the webhook's purpose.                                             |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The human-readable name of the webhook.                                                       |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The unique identifier of the webhook.                                                         |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `url`                                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | The destination URL that receives event notification HTTP callbacks.                          |