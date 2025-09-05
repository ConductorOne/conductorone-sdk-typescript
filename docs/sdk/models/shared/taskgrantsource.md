# TaskGrantSource

The TaskGrantSource message tracks which external URL was the source of the specificed grant ticket.

## Example Usage

```typescript
import { TaskGrantSource } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskGrantSource = {};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `conversationId`                                              | *string*                                                      | :heavy_minus_sign:                                            | The ID of the conversation that created this ticket           |
| `externalUrl`                                                 | *string*                                                      | :heavy_minus_sign:                                            | The external url source of the grant ticket.                  |
| `integrationId`                                               | *string*                                                      | :heavy_minus_sign:                                            | The integration id for the source of tickets.                 |
| `requestId`                                                   | *string*                                                      | :heavy_minus_sign:                                            | the request id for the grant ticket if the source is external |