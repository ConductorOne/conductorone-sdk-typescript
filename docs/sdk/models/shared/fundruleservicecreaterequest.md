# FundRuleServiceCreateRequest

The FundRuleServiceCreateRequest message.

## Example Usage

```typescript
import { FundRuleServiceCreateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FundRuleServiceCreateRequest = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `displayName`                                                               | *string*                                                                    | :heavy_minus_sign:                                                          | The displayName field.                                                      |
| `grant`                                                                     | [shared.FundsSpendLimit](../../../sdk/models/shared/fundsspendlimit.md)     | :heavy_minus_sign:                                                          | N/A                                                                         |
| `groupRef`                                                                  | [shared.AppEntitlementRef](../../../sdk/models/shared/appentitlementref.md) | :heavy_minus_sign:                                                          | N/A                                                                         |
| `reason`                                                                    | *string*                                                                    | :heavy_minus_sign:                                                          | The reason field.                                                           |