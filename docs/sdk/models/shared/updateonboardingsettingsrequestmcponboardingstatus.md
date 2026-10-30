# UpdateOnboardingSettingsRequestMcpOnboardingStatus

The new MCP onboarding status to set. Omit (or UNSPECIFIED) to leave it
 unchanged. Setting NOT_STARTED restarts the briefing and clears the stored
 mcp_onboarding_goal and mcp_onboarding_targets, unless this same request also
 sets them (those win).

## Example Usage

```typescript
import { UpdateOnboardingSettingsRequestMcpOnboardingStatus } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UpdateOnboardingSettingsRequestMcpOnboardingStatus =
  "MCP_ONBOARDING_STATUS_IN_PROGRESS";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"MCP_ONBOARDING_STATUS_UNSPECIFIED" | "MCP_ONBOARDING_STATUS_NOT_STARTED" | "MCP_ONBOARDING_STATUS_IN_PROGRESS" | "MCP_ONBOARDING_STATUS_COMPLETE" | "MCP_ONBOARDING_STATUS_DISMISSED" | Unrecognized<string>
```