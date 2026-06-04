# FindingRoutingRuleAction

The FindingRoutingRuleAction message.

This message contains a oneof named action. Only a single field of the following list may be set at a time:
  - createTask
  - suppress
  - notify


## Example Usage

```typescript
import { FindingRoutingRuleAction } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FindingRoutingRuleAction = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `createTask`                                                                        | [shared.CreateTaskAction](../../../sdk/models/shared/createtaskaction.md)           | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `notify`                                                                            | [shared.NotifyAction](../../../sdk/models/shared/notifyaction.md)                   | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `suppress`                                                                          | [shared.SuppressRoutingAction](../../../sdk/models/shared/suppressroutingaction.md) | :heavy_minus_sign:                                                                  | N/A                                                                                 |