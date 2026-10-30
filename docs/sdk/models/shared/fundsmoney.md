# FundsMoney

Money is a non-negative monetary value used by spending controls.

## Example Usage

```typescript
import { FundsMoney } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FundsMoney = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `currencyCode`                                                           | *string*                                                                 | :heavy_minus_sign:                                                       | ISO 4217 currency code.                                                  |
| `nanos`                                                                  | *number*                                                                 | :heavy_minus_sign:                                                       | Fractional nano-units, from zero through 999999999.                      |
| `units`                                                                  | *number*                                                                 | :heavy_minus_sign:                                                       | Whole currency units. The bound keeps nano-unit conversion within int64. |