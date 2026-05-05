# WebhooksSearchResponse

The WebhooksSearchResponse message.

## Example Usage

```typescript
import { WebhooksSearchResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: WebhooksSearchResponse = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `list`                                                                               | [shared.WebhookEndpoint](../../../sdk/models/shared/webhookendpoint.md)[]            | :heavy_minus_sign:                                                                   | The list of webhooks matching the search criteria.                                   |
| `nextPageToken`                                                                      | *string*                                                                             | :heavy_minus_sign:                                                                   | A token to retrieve the next page of results, or empty if there are no more results. |