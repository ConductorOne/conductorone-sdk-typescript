# ReferenceStrength

GrantReasonReferenceStrength is used to indicate the strength of the reference to the reason.
 This is used to determine if a grant should be removed when all strong reasons are removed.

## Example Usage

```typescript
import { ReferenceStrength } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ReferenceStrength = "GRANT_REASON_REFERENCE_STRENGTH_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"GRANT_REASON_REFERENCE_STRENGTH_UNSPECIFIED" | "GRANT_REASON_REFERENCE_STRENGTH_WEAK" | "GRANT_REASON_REFERENCE_STRENGTH_STRONG" | Unrecognized<string>
```