# UpdateOnboardingSettingsRequest

The UpdateOnboardingSettingsRequest message.

## Example Usage

```typescript
import { UpdateOnboardingSettingsRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UpdateOnboardingSettingsRequest = {};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `conversationId`                                                                                                    | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | The identifier of the onboarding conversation thread to associate.                                                  |
| `status`                                                                                                            | [shared.UpdateOnboardingSettingsRequestStatus](../../../sdk/models/shared/updateonboardingsettingsrequeststatus.md) | :heavy_minus_sign:                                                                                                  | The new onboarding status to set.                                                                                   |