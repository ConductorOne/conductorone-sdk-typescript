# UpdateOnboardingSettingsResponse

The UpdateOnboardingSettingsResponse message.

## Example Usage

```typescript
import { UpdateOnboardingSettingsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UpdateOnboardingSettingsResponse = {};
```

## Fields

| Field                                                                                                                                           | Type                                                                                                                                            | Required                                                                                                                                        | Description                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `mcpOnboardingGoal`                                                                                                                             | *string*                                                                                                                                        | :heavy_minus_sign:                                                                                                                              | The updated AIAM onboarding goal.                                                                                                               |
| `mcpOnboardingStatus`                                                                                                                           | [shared.UpdateOnboardingSettingsResponseMcpOnboardingStatus](../../../sdk/models/shared/updateonboardingsettingsresponsemcponboardingstatus.md) | :heavy_minus_sign:                                                                                                                              | The updated AIAM MCP onboarding status.                                                                                                         |
| `mcpOnboardingTargets`                                                                                                                          | [shared.McpOnboardingTarget](../../../sdk/models/shared/mcponboardingtarget.md)[]                                                               | :heavy_minus_sign:                                                                                                                              | The updated AIAM onboarding targets.                                                                                                            |
| `status`                                                                                                                                        | [shared.UpdateOnboardingSettingsResponseStatus](../../../sdk/models/shared/updateonboardingsettingsresponsestatus.md)                           | :heavy_minus_sign:                                                                                                                              | The updated onboarding status.                                                                                                                  |