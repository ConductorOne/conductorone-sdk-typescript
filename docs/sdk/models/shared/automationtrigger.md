# AutomationTrigger

Automation Triggers

This message contains a oneof named kind. Only a single field of the following list may be set at a time:
  - manual
  - userProfileChange
  - appUserCreated
  - appUserUpdated
  - usageBasedRevocation
  - userCreated
  - grantFound
  - grantDeleted
  - webhook
  - schedule
  - form
  - scheduleAppUser


## Example Usage

```typescript
import { AutomationTrigger } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AutomationTrigger = {};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `appUserCreated`                                                                                | [shared.AppUserCreatedTrigger](../../../sdk/models/shared/appusercreatedtrigger.md)             | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `appUserUpdated`                                                                                | [shared.AppUserUpdatedTrigger](../../../sdk/models/shared/appuserupdatedtrigger.md)             | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `form`                                                                                          | [shared.FormTrigger](../../../sdk/models/shared/formtrigger.md)                                 | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `grantDeleted`                                                                                  | [shared.GrantDeletedTrigger](../../../sdk/models/shared/grantdeletedtrigger.md)                 | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `grantFound`                                                                                    | [shared.GrantFoundTrigger](../../../sdk/models/shared/grantfoundtrigger.md)                     | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `manual`                                                                                        | [shared.ManualAutomationTrigger](../../../sdk/models/shared/manualautomationtrigger.md)         | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `schedule`                                                                                      | [shared.ScheduleTrigger](../../../sdk/models/shared/scheduletrigger.md)                         | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `scheduleTriggerAppUser`                                                                        | [shared.ScheduleTriggerAppUser](../../../sdk/models/shared/scheduletriggerappuser.md)           | :heavy_minus_sign:                                                                              | The ScheduleTriggerAppUser message.                                                             |
| `usageBasedRevocation`                                                                          | [shared.UsageBasedRevocationTrigger](../../../sdk/models/shared/usagebasedrevocationtrigger.md) | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `userCreated`                                                                                   | [shared.UserCreatedTrigger](../../../sdk/models/shared/usercreatedtrigger.md)                   | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `userProfileChange`                                                                             | [shared.UserProfileChangeTrigger](../../../sdk/models/shared/userprofilechangetrigger.md)       | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `webhook`                                                                                       | [shared.WebhookAutomationTrigger](../../../sdk/models/shared/webhookautomationtrigger.md)       | :heavy_minus_sign:                                                                              | N/A                                                                                             |