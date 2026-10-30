# FundsSpendSuspension

SpendSuspension preserves the underlying controls while refusing new spend.

## Example Usage

```typescript
import { FundsSpendSuspension } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FundsSpendSuspension = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `reason`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | The reason field.                                                                             |
| `suspendedAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |