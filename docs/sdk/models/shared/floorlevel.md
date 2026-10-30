# FloorLevel

The minimum assurance level that satisfies this rule.

## Example Usage

```typescript
import { FloorLevel } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FloorLevel = "AUTH_LEVEL_SINGLE_FACTOR";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"AUTH_LEVEL_UNSPECIFIED" | "AUTH_LEVEL_NONE" | "AUTH_LEVEL_SINGLE_FACTOR" | "AUTH_LEVEL_MULTI_FACTOR" | "AUTH_LEVEL_PHR" | "AUTH_LEVEL_PHRH" | Unrecognized<string>
```