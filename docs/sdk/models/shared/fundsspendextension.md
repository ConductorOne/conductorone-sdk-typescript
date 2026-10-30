# FundsSpendExtension

SpendExtension replaces the base total temporarily; it is not additive credit.

## Example Usage

```typescript
import { FundsSpendExtension } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FundsSpendExtension = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `limit`                                                                                       | [shared.FundsSpendLimit](../../../sdk/models/shared/fundsspendlimit.md)                       | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `reason`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | The reason field.                                                                             |