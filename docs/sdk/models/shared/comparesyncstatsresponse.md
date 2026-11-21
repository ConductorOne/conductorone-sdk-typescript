# CompareSyncStatsResponse

CompareSyncStatsResponse contains count deltas only, without synced records or file access.

## Example Usage

```typescript
import { CompareSyncStatsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CompareSyncStatsResponse = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `c1zSizeDelta`                                                                        | *number*                                                                              | :heavy_minus_sign:                                                                    | Recorded file-size difference in bytes; this does not provide access to the file.     |
| `largeDecrease`                                                                       | *string*[]                                                                            | :heavy_minus_sign:                                                                    | Resource types with a large decrease in at least one count category.                  |
| `perType`                                                                             | [shared.SyncResourceTypeDelta](../../../sdk/models/shared/syncresourcetypedelta.md)[] | :heavy_minus_sign:                                                                    | Union of resource types from all three count maps, ordered by identifier.             |
| `typesAdded`                                                                          | *string*[]                                                                            | :heavy_minus_sign:                                                                    | Resource types present only on the after side.                                        |
| `typesRemoved`                                                                        | *string*[]                                                                            | :heavy_minus_sign:                                                                    | Resource types present only on the before side.                                       |