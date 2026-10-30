# FollowedTier

C1 tier this route follows; UNSPECIFIED means it follows no tier. On write, a route that sets a tier must
 use the route_id c1-<tier>; the server replaces its targets and selection with the tier's current model,
 served through the providers this Edge already has credentials for, and also publishes that model's name
 as a second route. Clearing the tier (and publication) on a published route pins it to its current
 targets.

## Example Usage

```typescript
import { FollowedTier } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FollowedTier = "EDGE_INFERENCE_TIER_FAST";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"EDGE_INFERENCE_TIER_UNSPECIFIED" | "EDGE_INFERENCE_TIER_FAST" | "EDGE_INFERENCE_TIER_BALANCED" | "EDGE_INFERENCE_TIER_BEST" | Unrecognized<string>
```