# RecoveryPolicyServiceCreateRequestMinRecoveryAuthLevel

The minimum assurance level a recovery ceremony must reach.

## Example Usage

```typescript
import { RecoveryPolicyServiceCreateRequestMinRecoveryAuthLevel } from "conductorone-sdk-typescript/sdk/models/shared";

let value: RecoveryPolicyServiceCreateRequestMinRecoveryAuthLevel =
  "AUTH_LEVEL_NONE";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"AUTH_LEVEL_UNSPECIFIED" | "AUTH_LEVEL_NONE" | "AUTH_LEVEL_SINGLE_FACTOR" | "AUTH_LEVEL_MULTI_FACTOR" | "AUTH_LEVEL_PHR" | "AUTH_LEVEL_PHRH" | Unrecognized<string>
```