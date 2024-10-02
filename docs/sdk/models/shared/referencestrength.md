# ReferenceStrength

GrantReasonReferenceStrength is used to indicate the strength of the reference to the reason.
 This is used to determine if a grant should be removed when all strong reasons are removed.

## Example Usage

```typescript
import { ReferenceStrength } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ReferenceStrength = "GRANT_REASON_REFERENCE_STRENGTH_STRONG";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"GRANT_REASON_REFERENCE_STRENGTH_UNSPECIFIED" | "GRANT_REASON_REFERENCE_STRENGTH_WEAK" | "GRANT_REASON_REFERENCE_STRENGTH_STRONG" | Unrecognized<string>
```