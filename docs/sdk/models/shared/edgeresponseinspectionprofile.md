# EdgeResponseInspectionProfile

Default inspection profile for hosted egress response bodies. Unspecified
 means strict. Requests always use strict inspection. Web balanced requires
 a runtime that supports it; older runtimes retain strict inspection.

## Example Usage

```typescript
import { EdgeResponseInspectionProfile } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeResponseInspectionProfile =
  "EDGE_RESPONSE_INSPECTION_PROFILE_STRICT";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"EDGE_RESPONSE_INSPECTION_PROFILE_UNSPECIFIED" | "EDGE_RESPONSE_INSPECTION_PROFILE_STRICT" | "EDGE_RESPONSE_INSPECTION_PROFILE_WEB_BALANCED" | Unrecognized<string>
```