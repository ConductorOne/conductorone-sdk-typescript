# AllowFloorLevel

The minimum assurance level that satisfies this rule. Required on enforced
 Allow rules.

## Example Usage

```typescript
import { AllowFloorLevel } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AllowFloorLevel = "AUTH_LEVEL_SINGLE_FACTOR";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"AUTH_LEVEL_UNSPECIFIED" | "AUTH_LEVEL_NONE" | "AUTH_LEVEL_SINGLE_FACTOR" | "AUTH_LEVEL_MULTI_FACTOR" | "AUTH_LEVEL_PHR" | "AUTH_LEVEL_PHRH" | Unrecognized<string>
```