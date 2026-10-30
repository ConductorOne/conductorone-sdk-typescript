# DenialMoneySnapshot

DenialMoneySnapshot captures account amounts at the first refusal.

## Example Usage

```typescript
import { DenialMoneySnapshot } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DenialMoneySnapshot = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `consumedNano`                                                       | *number*                                                             | :heavy_minus_sign:                                                   | Spend already settled when the first refusal occurred.               |
| `currencyCode`                                                       | *string*                                                             | :heavy_minus_sign:                                                   | Currency used for monetary values.                                   |
| `limitNano`                                                          | *number*                                                             | :heavy_minus_sign:                                                   | Effective limit that caused the refusal.                             |
| `requestedNano`                                                      | *number*                                                             | :heavy_minus_sign:                                                   | Spend requested by the refused call.                                 |
| `reservedNano`                                                       | *number*                                                             | :heavy_minus_sign:                                                   | Spend reserved by in-progress calls when the first refusal occurred. |