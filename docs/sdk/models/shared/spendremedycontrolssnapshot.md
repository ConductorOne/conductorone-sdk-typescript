# SpendRemedyControlsSnapshot

The SpendRemedyControlsSnapshot message.

## Example Usage

```typescript
import { SpendRemedyControlsSnapshot } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SpendRemedyControlsSnapshot = {};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `controls`                                                                                                  | [shared.FundsSpendControls](../../../sdk/models/shared/fundsspendcontrols.md)                               | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `period`                                                                                                    | [shared.SpendRemedyControlsSnapshotPeriod](../../../sdk/models/shared/spendremedycontrolssnapshotperiod.md) | :heavy_minus_sign:                                                                                          | The period field.                                                                                           |
| `version`                                                                                                   | *number*                                                                                                    | :heavy_minus_sign:                                                                                          | Serialized as a string so JavaScript preserves the exact database version.                                  |