# WebhooksServiceListResponse

The WebhooksServiceListResponse message.

## Example Usage

```typescript
import { WebhooksServiceListResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: WebhooksServiceListResponse = {};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `list`                                                    | [shared.Webhook](../../../sdk/models/shared/webhook.md)[] | :heavy_minus_sign:                                        | The list field.                                           |
| `nextPageToken`                                           | *string*                                                  | :heavy_minus_sign:                                        | The nextPageToken field.                                  |