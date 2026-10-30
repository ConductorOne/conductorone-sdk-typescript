# TBTrafficSummaryBucket

TBTrafficSummaryBucket is one point in GetTrafficSummary's time series.

## Example Usage

```typescript
import { TBTrafficSummaryBucket } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TBTrafficSummaryBucket = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `allowedEvents`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | The allowedEvents field.                                                                      |
| `bucketStart`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `deniedEvents`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | The deniedEvents field.                                                                       |
| `unspecifiedEvents`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | The unspecifiedEvents field.                                                                  |