# SyncFailureStreak

SyncFailureStreak summarizes only the returned history window.

## Example Usage

```typescript
import { SyncFailureStreak } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SyncFailureStreak = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `failedRuns`                                                                                  | *number*                                                                                      | :heavy_minus_sign:                                                                            | Number of errored runs in the window.                                                         |
| `failureRatio`                                                                                | *number*                                                                                      | :heavy_minus_sign:                                                                            | Failed runs divided by finished runs; zero when no qualifying runs are present.               |
| `finishedRuns`                                                                                | *number*                                                                                      | :heavy_minus_sign:                                                                            | Number of terminal successful or errored runs used as the denominator.                        |
| `firstFailedAt`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `firstFailedLifecycleId`                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | First failure after the most recent success in the window, absent if none is established.     |