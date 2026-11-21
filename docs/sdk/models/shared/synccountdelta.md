# SyncCountDelta

SyncCountDelta compares one aggregate count; missing map entries count as zero.

## Example Usage

```typescript
import { SyncCountDelta } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SyncCountDelta = {};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `after`                                                             | *number*                                                            | :heavy_minus_sign:                                                  | Count in the after run.                                             |
| `before`                                                            | *number*                                                            | :heavy_minus_sign:                                                  | Count in the before run.                                            |
| `delta`                                                             | *number*                                                            | :heavy_minus_sign:                                                  | After count minus before count.                                     |
| `largeDecrease`                                                     | *boolean*                                                           | :heavy_minus_sign:                                                  | True when a positive before count decreases by at least 30 percent. |