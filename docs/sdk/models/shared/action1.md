# Action1

The Action message.

This message contains a oneof named target. Only a single field of the following list may be set at a time:
  - automation
  - batonResourceAction


## Example Usage

```typescript
import { Action1 } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Action1 = {};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `actionTargetAutomation`                                                                                | [shared.ActionTargetAutomation](../../../sdk/models/shared/actiontargetautomation.md)                   | :heavy_minus_sign:                                                                                      | ActionTargetAutomation targets automation templates for policy actions.                                 |
| `actionTargetBatonResourceAction`                                                                       | [shared.ActionTargetBatonResourceAction](../../../sdk/models/shared/actiontargetbatonresourceaction.md) | :heavy_minus_sign:                                                                                      | ActionTargetResource targets resource actions for policy actions.                                       |