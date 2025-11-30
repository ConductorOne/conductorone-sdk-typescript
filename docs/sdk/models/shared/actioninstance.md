# ActionInstance

The ActionInstance message.

This message contains a oneof named target_instance. Only a single field of the following list may be set at a time:
  - automation


This message contains a oneof named outcome. Only a single field of the following list may be set at a time:
  - success
  - denied
  - error
  - cancelled


## Example Usage

```typescript
import { ActionInstance } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ActionInstance = {};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `action`                                                                                                                                         | [shared.Action](../../../sdk/models/shared/action.md)                                                                                            | :heavy_minus_sign:                                                                                                                               | The Action message.<br/><br/>This message contains a oneof named target. Only a single field of the following list may be set at a time:<br/>  - automation<br/> |
| `actionTargetAutomationInstance`                                                                                                                 | [shared.ActionTargetAutomationInstance](../../../sdk/models/shared/actiontargetautomationinstance.md)                                            | :heavy_minus_sign:                                                                                                                               | The ActionTargetAutomationInstance message.                                                                                                      |
| `actionOutcomeCancelled`                                                                                                                         | [shared.ActionOutcomeCancelled](../../../sdk/models/shared/actionoutcomecancelled.md)                                                            | :heavy_minus_sign:                                                                                                                               | The ActionOutcomeCancelled message.                                                                                                              |
| `actionOutcomeDenied`                                                                                                                            | [shared.ActionOutcomeDenied](../../../sdk/models/shared/actionoutcomedenied.md)                                                                  | :heavy_minus_sign:                                                                                                                               | The ActionOutcomeDenied message.                                                                                                                 |
| `actionOutcomeError`                                                                                                                             | [shared.ActionOutcomeError](../../../sdk/models/shared/actionoutcomeerror.md)                                                                    | :heavy_minus_sign:                                                                                                                               | The ActionOutcomeError message.                                                                                                                  |
| `state`                                                                                                                                          | [shared.ActionInstanceState](../../../sdk/models/shared/actioninstancestate.md)                                                                  | :heavy_minus_sign:                                                                                                                               | The current state of the action execution.                                                                                                       |
| `actionOutcomeSuccess`                                                                                                                           | [shared.ActionOutcomeSuccess](../../../sdk/models/shared/actionoutcomesuccess.md)                                                                | :heavy_minus_sign:                                                                                                                               | The ActionOutcomeSuccess message.                                                                                                                |