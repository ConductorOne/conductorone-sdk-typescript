# FundAssignmentServiceSetLimitRequest

The FundAssignmentServiceSetLimitRequest message.

## Example Usage

```typescript
import { FundAssignmentServiceSetLimitRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FundAssignmentServiceSetLimitRequest = {};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `limit`                                                                                                                       | [shared.FundsSpendLimit](../../../sdk/models/shared/fundsspendlimit.md)                                                       | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           |
| `period`                                                                                                                      | [shared.FundAssignmentServiceSetLimitRequestPeriod](../../../sdk/models/shared/fundassignmentservicesetlimitrequestperiod.md) | :heavy_minus_sign:                                                                                                            | Optional period override. Only valid together with the limit it denominates.                                                  |