# FundPolicy

FundPolicy is the tenant's fund policy as the API renders it. Every field is
 server-owned on the way out; requests name the fields they change rather than
 sending this message back.

## Example Usage

```typescript
import { FundPolicy } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FundPolicy = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `currencyCode`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | ISO 4217. Set at Create and immutable thereafter.                                             |
| `defaultLimit`                                                                                | [shared.FundsSpendLimit](../../../sdk/models/shared/fundsspendlimit.md)                       | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `orgCeiling`                                                                                  | [shared.FundsSpendControls](../../../sdk/models/shared/fundsspendcontrols.md)                 | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `period`                                                                                      | [shared.FundPolicyPeriod](../../../sdk/models/shared/fundpolicyperiod.md)                     | :heavy_minus_sign:                                                                            | The root period every amount in the tenant is denominated in.                                 |
| `spendRemedyRequestPolicyId`                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | Explicit approval policy for scoped spending changes. Empty disables requests.                |
| `tenantId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The tenantId field.                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |