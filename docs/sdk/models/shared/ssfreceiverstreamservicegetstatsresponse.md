# SSFReceiverStreamServiceGetStatsResponse

SSFReceiverStreamServiceGetStatsResponse contains the event processing statistics for the stream.

## Example Usage

```typescript
import { SSFReceiverStreamServiceGetStatsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SSFReceiverStreamServiceGetStatsResponse = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `ssfReceiverStreamStats`                                                              | [shared.SSFReceiverStreamStats](../../../sdk/models/shared/ssfreceiverstreamstats.md) | :heavy_minus_sign:                                                                    | SSFReceiverStreamStats is a lightweight read-only stats object.                       |