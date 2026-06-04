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

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `automation`                                                                                            | [shared.ActionTargetAutomation](../../../sdk/models/shared/actiontargetautomation.md)                   | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `batonResourceAction`                                                                                   | [shared.ActionTargetBatonResourceAction](../../../sdk/models/shared/actiontargetbatonresourceaction.md) | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `clientIdApproval`                                                                                      | [shared.ActionTargetClientIdApproval](../../../sdk/models/shared/actiontargetclientidapproval.md)       | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |