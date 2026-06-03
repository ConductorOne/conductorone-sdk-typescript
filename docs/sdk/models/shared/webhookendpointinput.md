# WebhookEndpointInput

The Webhook message.

## Example Usage

```typescript
import { WebhookEndpointInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: WebhookEndpointInput = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `callbackTimeout`                                                    | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `description`                                                        | *string*                                                             | :heavy_minus_sign:                                                   | An optional description of the webhook's purpose.                    |
| `displayName`                                                        | *string*                                                             | :heavy_minus_sign:                                                   | The human-readable name of the webhook.                              |
| `id`                                                                 | *string*                                                             | :heavy_minus_sign:                                                   | The unique identifier of the webhook.                                |
| `url`                                                                | *string*                                                             | :heavy_minus_sign:                                                   | The destination URL that receives event notification HTTP callbacks. |