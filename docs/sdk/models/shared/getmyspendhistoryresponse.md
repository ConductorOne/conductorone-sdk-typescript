# GetMySpendHistoryResponse

GetMySpendHistoryResponse contains the caller's complete-day history and
 current calendar-month totals.

## Example Usage

```typescript
import { GetMySpendHistoryResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GetMySpendHistoryResponse = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `currencyCode`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | Currency used for monetary values.                                                            |
| `monthEnd`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `monthStart`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `reportingEnd`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `reportingStart`                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `spentInRangeNano`                                                                            | *number*                                                                                      | :heavy_minus_sign:                                                                            | Settled spend from reporting_start through reporting_end.                                     |
| `spentThisMonthNano`                                                                          | *number*                                                                                      | :heavy_minus_sign:                                                                            | Settled spend from month_start through the current whole-second cutoff.                       |
| `spentThroughYesterdayNano`                                                                   | *number*                                                                                      | :heavy_minus_sign:                                                                            | Settled spend from month_start through reporting_end.                                         |
| `trajectory`                                                                                  | [shared.MySpendTrajectoryPoint](../../../sdk/models/shared/myspendtrajectorypoint.md)[]       | :heavy_minus_sign:                                                                            | Settled spend for each complete UTC day in the reporting range.                               |