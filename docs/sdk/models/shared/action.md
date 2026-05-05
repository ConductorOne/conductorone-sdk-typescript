# Action

The Action message.

This message contains a oneof named target. Only a single field of the following list may be set at a time:
  - automation
  - batonResourceAction
  - clientIdApproval


## Example Usage

```typescript
import { Action } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Action = {};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `actionTargetAutomation`                                                                                                              | [shared.ActionTargetAutomation](../../../sdk/models/shared/actiontargetautomation.md)                                                 | :heavy_minus_sign:                                                                                                                    | ActionTargetAutomation targets automation templates for policy actions.                                                               |
| `actionTargetBatonResourceAction`                                                                                                     | [shared.ActionTargetBatonResourceAction](../../../sdk/models/shared/actiontargetbatonresourceaction.md)                               | :heavy_minus_sign:                                                                                                                    | ActionTargetResource targets resource actions for policy actions.                                                                     |
| `actionTargetClientIdApproval`                                                                                                        | [shared.ActionTargetClientIdApproval](../../../sdk/models/shared/actiontargetclientidapproval.md)                                     | :heavy_minus_sign:                                                                                                                    | ActionTargetClientIdApproval targets administrator review of an external<br/> OAuth client registration (CIMD or DCR) for policy actions. |