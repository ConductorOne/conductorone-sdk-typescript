# StepUpRequiredLevel

The assurance level the step-up must reach.

## Example Usage

```typescript
import { StepUpRequiredLevel } from "conductorone-sdk-typescript/sdk/models/shared";

let value: StepUpRequiredLevel = "AUTH_LEVEL_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"AUTH_LEVEL_UNSPECIFIED" | "AUTH_LEVEL_NONE" | "AUTH_LEVEL_SINGLE_FACTOR" | "AUTH_LEVEL_MULTI_FACTOR" | "AUTH_LEVEL_PHR" | "AUTH_LEVEL_PHRH" | Unrecognized<string>
```