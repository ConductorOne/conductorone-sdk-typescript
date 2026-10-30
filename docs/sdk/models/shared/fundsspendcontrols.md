# FundsSpendControls

SpendControls retains coexisting base, extension and suspension state.

## Example Usage

```typescript
import { FundsSpendControls } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FundsSpendControls = {};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `extension`                                                                               | [shared.FundsSpendExtension](../../../sdk/models/shared/fundsspendextension.md)           | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `limit`                                                                                   | [shared.FundsSpendLimit](../../../sdk/models/shared/fundsspendlimit.md)                   | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `period`                                                                                  | [shared.FundsSpendControlsPeriod](../../../sdk/models/shared/fundsspendcontrolsperiod.md) | :heavy_minus_sign:                                                                        | The period field.                                                                         |
| `suspension`                                                                              | [shared.FundsSpendSuspension](../../../sdk/models/shared/fundsspendsuspension.md)         | :heavy_minus_sign:                                                                        | N/A                                                                                       |