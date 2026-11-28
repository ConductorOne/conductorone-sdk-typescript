# ConflictMonitorRule

The rule a conflict monitor detects. A rule's entitlement lists are set
 through the monitor's entitlement bindings (groups A and B).

This message contains a oneof named type. Only a single field of the following list may be set at a time:
  - holdsBoth
  - holdsAWithoutB


## Example Usage

```typescript
import { ConflictMonitorRule } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ConflictMonitorRule = {};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `holdsAWithoutB`                                                                                            | [shared.ConflictMonitorHoldsAWithoutBRule](../../../sdk/models/shared/conflictmonitorholdsawithoutbrule.md) | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `holdsBoth`                                                                                                 | [shared.ConflictMonitorHoldsBothRule](../../../sdk/models/shared/conflictmonitorholdsbothrule.md)           | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |