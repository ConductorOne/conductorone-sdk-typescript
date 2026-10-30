# UpdateOnboardingSettingsRequestStatus

The new onboarding status to set. UNSPECIFIED leaves the core onboarding
 status unchanged (set mcp_onboarding_status alone to retire the AIAM
 briefing without touching the core wizard).

## Example Usage

```typescript
import { UpdateOnboardingSettingsRequestStatus } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UpdateOnboardingSettingsRequestStatus =
  "ONBOARDING_STATUS_NOT_STARTED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"ONBOARDING_STATUS_UNSPECIFIED" | "ONBOARDING_STATUS_NOT_STARTED" | "ONBOARDING_STATUS_IN_PROGRESS" | "ONBOARDING_STATUS_COMPLETE" | "ONBOARDING_STATUS_DISMISSED" | Unrecognized<string>
```