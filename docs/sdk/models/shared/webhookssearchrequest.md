# WebhooksSearchRequest

The WebhooksSearchRequest message.

## Example Usage

```typescript
import { WebhooksSearchRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: WebhooksSearchRequest = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `pageSize`                                                                      | *number*                                                                        | :heavy_minus_sign:                                                              | The maximum number of webhooks to return per page.                              |
| `pageToken`                                                                     | *string*                                                                        | :heavy_minus_sign:                                                              | The pagination token from a previous search response to fetch the next page.    |
| `query`                                                                         | *string*                                                                        | :heavy_minus_sign:                                                              | A text query to match against webhook names and descriptions.                   |
| `refs`                                                                          | [shared.WebhookRef](../../../sdk/models/shared/webhookref.md)[]                 | :heavy_minus_sign:                                                              | Optional set of webhook references to restrict the search to specific webhooks. |