# EdgeMode

Hosting state for the service configuration. DISABLED and UNSPECIFIED
 deny every request. ENFORCE and OBSERVE both still require capability
 authorization; content policy and routing remain configured on the Edge
 host. OBSERVE is currently identical to ENFORCE -- it exists so an
 operator can stage an Edge ahead of destination-level policy support,
 which does not exist yet.

## Example Usage

```typescript
import { EdgeMode } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeMode = "EDGE_MODE_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"EDGE_MODE_UNSPECIFIED" | "EDGE_MODE_DISABLED" | "EDGE_MODE_OBSERVE" | "EDGE_MODE_ENFORCE" | Unrecognized<string>
```