# GetOnboardingSettingsResponse

The GetOnboardingSettingsResponse message.

## Example Usage

```typescript
import { GetOnboardingSettingsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GetOnboardingSettingsResponse = {};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `conversationId`                                                                                                | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | The identifier of the onboarding conversation thread, if one is in progress.                                    |
| `intents`                                                                                                       | *string*[]                                                                                                      | :heavy_minus_sign:                                                                                              | The intents field.                                                                                              |
| `mcpOnboardingGoal`                                                                                             | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | The admin's free-form AIAM onboarding goal, captured at the Goals step.                                         |
| `mcpOnboardingStatus`                                                                                           | [shared.McpOnboardingStatus](../../../sdk/models/shared/mcponboardingstatus.md)                                 | :heavy_minus_sign:                                                                                              | The current status of the AIAM MCP onboarding briefing, tracked<br/> independently of `status`.                 |
| `mcpOnboardingTargets`                                                                                          | [shared.McpOnboardingTarget](../../../sdk/models/shared/mcponboardingtarget.md)[]                               | :heavy_minus_sign:                                                                                              | Per-target progress of the AIAM briefing: the servers/apps the admin chose<br/> to govern and how far each got. |
| `orgContext`                                                                                                    | [shared.OnboardingOrgContext](../../../sdk/models/shared/onboardingorgcontext.md)                               | :heavy_minus_sign:                                                                                              | N/A                                                                                                             |
| `status`                                                                                                        | [shared.GetOnboardingSettingsResponseStatus](../../../sdk/models/shared/getonboardingsettingsresponsestatus.md) | :heavy_minus_sign:                                                                                              | The current status of the tenant onboarding process.                                                            |