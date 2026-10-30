# MyEffectiveScope

MyEffectiveScope describes one budget scope that applies to the caller.
 Organization and application scopes never expose financial or authority data.

## Example Usage

```typescript
import { MyEffectiveScope } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MyEffectiveScope = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `financials`                                                                                  | [shared.MyEffectiveScopeFinancials](../../../sdk/models/shared/myeffectivescopefinancials.md) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `periodEnd`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `periodKey`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | Stable key for the current budget period.                                                     |
| `periodKind`                                                                                  | [shared.MyEffectiveScopePeriodKind](../../../sdk/models/shared/myeffectivescopeperiodkind.md) | :heavy_minus_sign:                                                                            | Length of the current budget period.                                                          |
| `periodStart`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `scope`                                                                                       | [shared.FundsAccountScope](../../../sdk/models/shared/fundsaccountscope.md)                   | :heavy_minus_sign:                                                                            | N/A                                                                                           |