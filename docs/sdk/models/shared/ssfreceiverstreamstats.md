# SSFReceiverStreamStats

SSFReceiverStreamStats is a lightweight read-only stats object.

## Example Usage

```typescript
import { SSFReceiverStreamStats } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SSFReceiverStreamStats = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `eventsActedOnCount`                                                                          | *number*                                                                                      | :heavy_minus_sign:                                                                            | The eventsActedOnCount field.                                                                 |
| `eventsFailedCount`                                                                           | *number*                                                                                      | :heavy_minus_sign:                                                                            | The eventsFailedCount field.                                                                  |
| `eventsReceivedCount`                                                                         | *number*                                                                                      | :heavy_minus_sign:                                                                            | The eventsReceivedCount field.                                                                |
| `lastErrorAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `lastErrorMessage`                                                                            | *string*                                                                                      | :heavy_minus_sign:                                                                            | The lastErrorMessage field.                                                                   |
| `lastEventReceivedAt`                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `lastVerifiedAt`                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `streamId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The streamId field.                                                                           |
| `transmitterStatus`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | The transmitterStatus field.                                                                  |
| `transmitterStatusReason`                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | The transmitterStatusReason field.                                                            |