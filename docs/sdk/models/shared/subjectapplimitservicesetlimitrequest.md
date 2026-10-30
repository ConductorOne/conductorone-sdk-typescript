# SubjectAppLimitServiceSetLimitRequest

The SubjectAppLimitServiceSetLimitRequest message.

## Example Usage

```typescript
import { SubjectAppLimitServiceSetLimitRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SubjectAppLimitServiceSetLimitRequest = {};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `limit`                                                                                                                         | [shared.FundsSpendLimit](../../../sdk/models/shared/fundsspendlimit.md)                                                         | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |
| `period`                                                                                                                        | [shared.SubjectAppLimitServiceSetLimitRequestPeriod](../../../sdk/models/shared/subjectapplimitservicesetlimitrequestperiod.md) | :heavy_minus_sign:                                                                                                              | Optional period override. Only valid together with the limit it denominates.                                                    |