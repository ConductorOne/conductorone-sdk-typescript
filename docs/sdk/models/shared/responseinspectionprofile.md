# ResponseInspectionProfile

Response-body inspection override, only applied to ALLOW rules.
 Unspecified inherits the Edge's profile; DENY and AUTHZEN clear this field.
 Requests always use strict inspection.

## Example Usage

```typescript
import { ResponseInspectionProfile } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ResponseInspectionProfile =
  "EDGE_RESPONSE_INSPECTION_PROFILE_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"EDGE_RESPONSE_INSPECTION_PROFILE_UNSPECIFIED" | "EDGE_RESPONSE_INSPECTION_PROFILE_STRICT" | "EDGE_RESPONSE_INSPECTION_PROFILE_WEB_BALANCED" | Unrecognized<string>
```