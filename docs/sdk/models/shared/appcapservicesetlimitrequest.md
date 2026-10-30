# AppCapServiceSetLimitRequest

The AppCapServiceSetLimitRequest message.

## Example Usage

```typescript
import { AppCapServiceSetLimitRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppCapServiceSetLimitRequest = {};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `limit`                                                                                                       | [shared.FundsSpendLimit](../../../sdk/models/shared/fundsspendlimit.md)                                       | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `period`                                                                                                      | [shared.AppCapServiceSetLimitRequestPeriod](../../../sdk/models/shared/appcapservicesetlimitrequestperiod.md) | :heavy_minus_sign:                                                                                            | Optional period override. Only valid together with the limit it denominates.                                  |