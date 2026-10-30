# McpOnboardingStatus

The current status of the AIAM MCP onboarding briefing, tracked
 independently of `status`.

## Example Usage

```typescript
import { McpOnboardingStatus } from "conductorone-sdk-typescript/sdk/models/shared";

let value: McpOnboardingStatus = "MCP_ONBOARDING_STATUS_COMPLETE";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"MCP_ONBOARDING_STATUS_UNSPECIFIED" | "MCP_ONBOARDING_STATUS_NOT_STARTED" | "MCP_ONBOARDING_STATUS_IN_PROGRESS" | "MCP_ONBOARDING_STATUS_COMPLETE" | "MCP_ONBOARDING_STATUS_DISMISSED" | Unrecognized<string>
```