# FundPolicyServiceSetOrgCeilingRequest

The FundPolicyServiceSetOrgCeilingRequest message.

## Example Usage

```typescript
import { FundPolicyServiceSetOrgCeilingRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FundPolicyServiceSetOrgCeilingRequest = {};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `limit`                                                                                                                         | [shared.FundsSpendLimit](../../../sdk/models/shared/fundsspendlimit.md)                                                         | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |
| `period`                                                                                                                        | [shared.FundPolicyServiceSetOrgCeilingRequestPeriod](../../../sdk/models/shared/fundpolicyservicesetorgceilingrequestperiod.md) | :heavy_minus_sign:                                                                                                              | Optional period override for the ceiling. Only valid together with limit.                                                       |