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
| `onboardingOrgContext`                                                                                          | [shared.OnboardingOrgContext](../../../sdk/models/shared/onboardingorgcontext.md)                               | :heavy_minus_sign:                                                                                              | The OnboardingOrgContext message.                                                                               |
| `status`                                                                                                        | [shared.GetOnboardingSettingsResponseStatus](../../../sdk/models/shared/getonboardingsettingsresponsestatus.md) | :heavy_minus_sign:                                                                                              | The current status of the tenant onboarding process.                                                            |