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
| `eventsActedOnCount`                                                                          | *number*                                                                                      | :heavy_minus_sign:                                                                            | Number of events that triggered an action (e.g., session revocation).                         |
| `eventsFailedCount`                                                                           | *number*                                                                                      | :heavy_minus_sign:                                                                            | Number of events that failed processing.                                                      |
| `eventsReceivedCount`                                                                         | *number*                                                                                      | :heavy_minus_sign:                                                                            | Total number of events received on this stream.                                               |
| `lastErrorAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `lastErrorMessage`                                                                            | *string*                                                                                      | :heavy_minus_sign:                                                                            | Human-readable description of the most recent processing error.                               |
| `lastEventReceivedAt`                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `lastVerifiedAt`                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `streamId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The SSF receiver stream these stats belong to.                                                |
| `transmitterStatus`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | Current status reported by the transmitter (e.g., "enabled", "paused").                       |
| `transmitterStatusReason`                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | Reason provided by the transmitter for its current status.                                    |