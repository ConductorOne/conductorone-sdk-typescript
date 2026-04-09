# SSFReceiverEventSearchServiceSearchRequest

The SSFReceiverEventSearchServiceSearchRequest message.

## Example Usage

```typescript
import { SSFReceiverEventSearchServiceSearchRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SSFReceiverEventSearchServiceSearchRequest = {};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `eventType`                                             | *string*                                                | :heavy_minus_sign:                                      | The eventType field.                                    |
| `matchedUserId`                                         | *string*                                                | :heavy_minus_sign:                                      | The matchedUserId field.                                |
| `outcome`                                               | [shared.Outcome](../../../sdk/models/shared/outcome.md) | :heavy_minus_sign:                                      | The outcome field.                                      |
| `pageSize`                                              | *number*                                                | :heavy_minus_sign:                                      | The pageSize field.                                     |
| `pageToken`                                             | *string*                                                | :heavy_minus_sign:                                      | The pageToken field.                                    |
| `query`                                                 | *string*                                                | :heavy_minus_sign:                                      | The query field.                                        |
| `streamId`                                              | *string*                                                | :heavy_minus_sign:                                      | The streamId field.                                     |