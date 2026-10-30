# C1ChartPoint

C1ChartPoint is a single (timestamp, value) observation.

## Example Usage

```typescript
import { C1ChartPoint } from "conductorone-sdk-typescript/sdk/models/shared";

let value: C1ChartPoint = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `ts`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `value`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | Bounds double as a NaN/Inf rejection: NaN fails every comparison.                             |