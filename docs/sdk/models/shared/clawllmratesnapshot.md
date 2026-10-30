# ClawLLMRateSnapshot

ClawLLMRateSnapshot records the exact price basis selected for a call.

## Example Usage

```typescript
import { ClawLLMRateSnapshot } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ClawLLMRateSnapshot = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `asOf`                                                                                      | *string*                                                                                    | :heavy_minus_sign:                                                                          | Date the price basis took effect.                                                           |
| `cacheReadNanoPerMillionTokens`                                                             | *number*                                                                                    | :heavy_minus_sign:                                                                          | Cache-read token price, in nano-units per million tokens.                                   |
| `cacheWriteNanoPerMillionTokens`                                                            | *number*                                                                                    | :heavy_minus_sign:                                                                          | Cache-write token price, in nano-units per million tokens.                                  |
| `citation`                                                                                  | *string*                                                                                    | :heavy_minus_sign:                                                                          | Reference for the price basis.                                                              |
| `inputNanoPerMillionTokens`                                                                 | *number*                                                                                    | :heavy_minus_sign:                                                                          | Input token price, in nano-units per million tokens.                                        |
| `note`                                                                                      | *string*                                                                                    | :heavy_minus_sign:                                                                          | Operator note recorded with the price basis.                                                |
| `outputNanoPerMillionTokens`                                                                | *number*                                                                                    | :heavy_minus_sign:                                                                          | Output token price, in nano-units per million tokens.                                       |
| `source`                                                                                    | [shared.ClawLLMRateSnapshotSource](../../../sdk/models/shared/clawllmratesnapshotsource.md) | :heavy_minus_sign:                                                                          | Provenance of the recorded prices.                                                          |