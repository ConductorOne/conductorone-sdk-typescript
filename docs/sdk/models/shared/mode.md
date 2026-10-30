# Mode

The e-stop, now a tri-state. DISABLED (and UNSPECIFIED) denies every
 call without touching the entitlement stack or its grants; OBSERVE
 evaluates fully but answers allow, recording what ENFORCE would have
 said; ENFORCE answers the policy's decision.

## Example Usage

```typescript
import { Mode } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Mode = "AUTHZEN_MODE_OBSERVE";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"AUTHZEN_MODE_UNSPECIFIED" | "AUTHZEN_MODE_DISABLED" | "AUTHZEN_MODE_OBSERVE" | "AUTHZEN_MODE_ENFORCE" | Unrecognized<string>
```