# WebhooksSearchRequest

The WebhooksSearchRequest message.

## Example Usage

```typescript
import { WebhooksSearchRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: WebhooksSearchRequest = {};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `pageSize`                                                      | *number*                                                        | :heavy_minus_sign:                                              | The pageSize field.                                             |
| `pageToken`                                                     | *string*                                                        | :heavy_minus_sign:                                              | The pageToken field.                                            |
| `query`                                                         | *string*                                                        | :heavy_minus_sign:                                              | The query field.                                                |
| `refs`                                                          | [shared.WebhookRef](../../../sdk/models/shared/webhookref.md)[] | :heavy_minus_sign:                                              | The refs field.                                                 |