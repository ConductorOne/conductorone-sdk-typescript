# WebhookDispatcher

WebhookDispatcher POSTs to a registered webhook (webhooks v3).

## Example Usage

```typescript
import { WebhookDispatcher } from "conductorone-sdk-typescript/sdk/models/shared";

let value: WebhookDispatcher = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `payloadTemplate`                                                  | *string*                                                           | :heavy_minus_sign:                                                 | Optional payload template; empty uses the default finding payload. |
| `webhookId`                                                        | *string*                                                           | :heavy_minus_sign:                                                 | ID of a registered webhook to POST to.                             |