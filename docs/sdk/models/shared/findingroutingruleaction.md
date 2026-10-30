# FindingRoutingRuleAction

The FindingRoutingRuleAction message.

This message contains a oneof named action. Only a single field of the following list may be set at a time:
  - createTask
  - suppress
  - snooze
  - acceptRisk


## Example Usage

```typescript
import { FindingRoutingRuleAction } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FindingRoutingRuleAction = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `acceptRisk`                                                                            | [shared.AcceptRiskRoutingAction](../../../sdk/models/shared/acceptriskroutingaction.md) | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `createTask`                                                                            | [shared.CreateTaskAction](../../../sdk/models/shared/createtaskaction.md)               | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `snooze`                                                                                | [shared.SnoozeRoutingAction](../../../sdk/models/shared/snoozeroutingaction.md)         | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `suppress`                                                                              | [shared.SuppressRoutingAction](../../../sdk/models/shared/suppressroutingaction.md)     | :heavy_minus_sign:                                                                      | N/A                                                                                     |