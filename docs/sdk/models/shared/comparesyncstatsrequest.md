# CompareSyncStatsRequest

CompareSyncStatsRequest selects two runs with recorded aggregate statistics.

This message contains a oneof named right. Only a single field of the following list may be set at a time:
  - rightLifecycleId
  - draftTestRun


## Example Usage

```typescript
import { CompareSyncStatsRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CompareSyncStatsRequest = {};
```

## Fields

| Field                                                                                                                                                                     | Type                                                                                                                                                                      | Required                                                                                                                                                                  | Description                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `draftTestRun`                                                                                                                                                            | [shared.DraftSyncTestRunReference](../../../sdk/models/shared/draftsynctestrunreference.md)                                                                               | :heavy_minus_sign:                                                                                                                                                        | N/A                                                                                                                                                                       |
| `leftLifecycleId`                                                                                                                                                         | *string*                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                        | Production lifecycle used as the before side.                                                                                                                             |
| `rightLifecycleId`                                                                                                                                                        | *string*                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                        | Production lifecycle used as the after side.<br/>This field is part of the `right` oneof.<br/>See the documentation for `c1.api.app.v1.CompareSyncStatsRequest` for more details. |