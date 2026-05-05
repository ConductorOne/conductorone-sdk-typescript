# WebhooksServiceListResponse

The WebhooksServiceListResponse message.

## Example Usage

```typescript
import { WebhooksServiceListResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: WebhooksServiceListResponse = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `list`                                                                               | [shared.WebhookEndpoint](../../../sdk/models/shared/webhookendpoint.md)[]            | :heavy_minus_sign:                                                                   | The list of webhooks for the current page.                                           |
| `nextPageToken`                                                                      | *string*                                                                             | :heavy_minus_sign:                                                                   | A token to retrieve the next page of results, or empty if there are no more results. |