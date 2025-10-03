# AutomationStep

The AutomationStep message.

This message contains a oneof named kind. Only a single field of the following list may be set at a time:
  - createAccessReview
  - waitForDuration
  - unenrollFromAllAccessProfiles
  - createRevokeTasks
  - sendEmail
  - removeFromDelegation
  - runAutomation
  - updateUser
  - taskAction
  - webhook
  - connectorAction
  - connectorCreateAccount
  - grantEntitlements
  - sendSlackMessage
  - callFunction
  - accountLifecycleAction


## Example Usage

```typescript
import { AutomationStep } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AutomationStep = {};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `accountLifecycleAction`                                                                            | [shared.AccountLifecycleAction](../../../sdk/models/shared/accountlifecycleaction.md)               | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `callFunction`                                                                                      | [shared.CallFunction](../../../sdk/models/shared/callfunction.md)                                   | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `connectorAction`                                                                                   | [shared.ConnectorAction](../../../sdk/models/shared/connectoraction.md)                             | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `connectorCreateAccount`                                                                            | [shared.ConnectorCreateAccount](../../../sdk/models/shared/connectorcreateaccount.md)               | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `createAccessReview`                                                                                | [shared.CreateAccessReview](../../../sdk/models/shared/createaccessreview.md)                       | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `createRevokeTasks`                                                                                 | [shared.CreateRevokeTasks](../../../sdk/models/shared/createrevoketasks.md)                         | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `grantEntitlements`                                                                                 | [shared.GrantEntitlements](../../../sdk/models/shared/grantentitlements.md)                         | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `removeFromDelegation`                                                                              | [shared.RemoveFromDelegation](../../../sdk/models/shared/removefromdelegation.md)                   | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `runAutomation`                                                                                     | [shared.RunAutomation](../../../sdk/models/shared/runautomation.md)                                 | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `sendEmail`                                                                                         | [shared.SendEmail](../../../sdk/models/shared/sendemail.md)                                         | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `sendSlackMessage`                                                                                  | [shared.SendSlackMessage](../../../sdk/models/shared/sendslackmessage.md)                           | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `skipIfTrueCel`                                                                                     | *string*                                                                                            | :heavy_minus_sign:                                                                                  | The skipIfTrueCel field.                                                                            |
| `stepDisplayName`                                                                                   | *string*                                                                                            | :heavy_minus_sign:                                                                                  | The stepDisplayName field.                                                                          |
| `stepName`                                                                                          | *string*                                                                                            | :heavy_minus_sign:                                                                                  | The stepName field.                                                                                 |
| `taskAction`                                                                                        | [shared.TaskAction](../../../sdk/models/shared/taskaction.md)                                       | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `unenrollFromAllAccessProfiles`                                                                     | [shared.UnenrollFromAllAccessProfiles](../../../sdk/models/shared/unenrollfromallaccessprofiles.md) | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `updateUser`                                                                                        | [shared.UpdateUser](../../../sdk/models/shared/updateuser.md)                                       | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `waitForDuration`                                                                                   | [shared.WaitForDuration](../../../sdk/models/shared/waitforduration.md)                             | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `webhook`                                                                                           | [shared.Webhook](../../../sdk/models/shared/webhook.md)                                             | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |