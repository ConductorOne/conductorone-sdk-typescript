# Kind

Restrict resources and scopes to this capability. UNSPECIFIED returns all
 authorized capabilities; unknown enum values are rejected.

## Example Usage

```typescript
import { Kind } from "conductorone-sdk-typescript/sdk/models/operations";

let value: Kind = "EDGE_CAPABILITY_KIND_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"EDGE_CAPABILITY_KIND_UNSPECIFIED" | "EDGE_CAPABILITY_KIND_EGRESS" | "EDGE_CAPABILITY_KIND_INFERENCE" | Unrecognized<string>
```