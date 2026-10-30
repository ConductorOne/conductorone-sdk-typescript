# MinRecoveryAuthLevel

The minimum assurance level a recovery ceremony must reach for this policy.

## Example Usage

```typescript
import { MinRecoveryAuthLevel } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MinRecoveryAuthLevel = "AUTH_LEVEL_MULTI_FACTOR";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"AUTH_LEVEL_UNSPECIFIED" | "AUTH_LEVEL_NONE" | "AUTH_LEVEL_SINGLE_FACTOR" | "AUTH_LEVEL_MULTI_FACTOR" | "AUTH_LEVEL_PHR" | "AUTH_LEVEL_PHRH" | Unrecognized<string>
```