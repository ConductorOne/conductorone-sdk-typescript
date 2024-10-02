# WebhooksServiceUpdateRequest

The WebhooksServiceUpdateRequest message contains the webhook object to update and a field mask to indicate which fields to update. It uses URL value for input.

## Example Usage

```typescript
import { WebhooksServiceUpdateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: WebhooksServiceUpdateRequest = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `updateMask`                                                      | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `webhook`                                                         | [shared.WebhookInput](../../../sdk/models/shared/webhookinput.md) | :heavy_minus_sign:                                                | The Webhook message.                                              |