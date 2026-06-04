# ActionInstance

The ActionInstance message.

This message contains a oneof named target_instance. Only a single field of the following list may be set at a time:
  - automation
  - batonResourceActionInstance
  - clientIdApprovalInstance


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

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                                | [shared.Action](../../../sdk/models/shared/action.md)                                                                   | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| `automation`                                                                                                            | [shared.ActionTargetAutomationInstance](../../../sdk/models/shared/actiontargetautomationinstance.md)                   | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| `batonResourceActionInstance`                                                                                           | [shared.ActionTargetBatonResourceActionInstance](../../../sdk/models/shared/actiontargetbatonresourceactioninstance.md) | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| `cancelled`                                                                                                             | [shared.ActionOutcomeCancelled](../../../sdk/models/shared/actionoutcomecancelled.md)                                   | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| `clientIdApprovalInstance`                                                                                              | [shared.ActionTargetClientIdApprovalInstance](../../../sdk/models/shared/actiontargetclientidapprovalinstance.md)       | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| `denied`                                                                                                                | [shared.ActionOutcomeDenied](../../../sdk/models/shared/actionoutcomedenied.md)                                         | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| `error`                                                                                                                 | [shared.ActionOutcomeError](../../../sdk/models/shared/actionoutcomeerror.md)                                           | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| `state`                                                                                                                 | [shared.ActionInstanceState](../../../sdk/models/shared/actioninstancestate.md)                                         | :heavy_minus_sign:                                                                                                      | The current state of the action execution.                                                                              |
| `success`                                                                                                               | [shared.ActionOutcomeSuccess](../../../sdk/models/shared/actionoutcomesuccess.md)                                       | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |