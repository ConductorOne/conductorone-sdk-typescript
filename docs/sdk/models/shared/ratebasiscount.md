# RateBasisCount

RateBasisCount summarizes settled calls that used one recorded price basis.

## Example Usage

```typescript
import { RateBasisCount } from "conductorone-sdk-typescript/sdk/models/shared";

let value: RateBasisCount = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `calls`                                                                         | *number*                                                                        | :heavy_minus_sign:                                                              | Number of settled calls that used this price basis.                             |
| `settledNano`                                                                   | *number*                                                                        | :heavy_minus_sign:                                                              | Total settled spend for these calls.                                            |
| `snapshot`                                                                      | [shared.ClawLLMRateSnapshot](../../../sdk/models/shared/clawllmratesnapshot.md) | :heavy_minus_sign:                                                              | N/A                                                                             |