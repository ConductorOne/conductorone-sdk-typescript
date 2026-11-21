# GetSyncHistoryResponse

GetSyncHistoryResponse contains newest-first runs and the trend within that window.

## Example Usage

```typescript
import { GetSyncHistoryResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GetSyncHistoryResponse = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `runs`                                                                       | [shared.SyncRunSummary](../../../sdk/models/shared/syncrunsummary.md)[]      | :heavy_minus_sign:                                                           | Recent completed and in-progress runs, deduplicated by lifecycle identifier. |
| `streak`                                                                     | [shared.SyncFailureStreak](../../../sdk/models/shared/syncfailurestreak.md)  | :heavy_minus_sign:                                                           | N/A                                                                          |