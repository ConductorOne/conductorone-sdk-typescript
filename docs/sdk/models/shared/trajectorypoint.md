# TrajectoryPoint

TrajectoryPoint represents settled spend for one UTC day.

## Example Usage

```typescript
import { TrajectoryPoint } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TrajectoryPoint = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `consumedNano`                                                                                | *number*                                                                                      | :heavy_minus_sign:                                                                            | Spend settled during the day, in billionths of the configured currency unit.                  |
| `day`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |