# MyFundLimitsServiceSetLimitRequest

The MyFundLimitsServiceSetLimitRequest message.

## Example Usage

```typescript
import { MyFundLimitsServiceSetLimitRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MyFundLimitsServiceSetLimitRequest = {};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `limit`                                                                                                                   | [shared.FundsSpendLimit](../../../sdk/models/shared/fundsspendlimit.md)                                                   | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |
| `period`                                                                                                                  | [shared.MyFundLimitsServiceSetLimitRequestPeriod](../../../sdk/models/shared/myfundlimitsservicesetlimitrequestperiod.md) | :heavy_minus_sign:                                                                                                        | Optional period override. Only valid together with the limit it denominates.                                              |