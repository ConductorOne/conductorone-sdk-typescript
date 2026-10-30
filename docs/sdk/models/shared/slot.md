# Slot

Which of the object's local-policy slots this policy occupies. Part of the
 scope, and immutable with it.

## Example Usage

```typescript
import { Slot } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Slot = "POLICY_SCOPE_SLOT_EMERGENCY";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"POLICY_SCOPE_SLOT_UNSPECIFIED" | "POLICY_SCOPE_SLOT_EMERGENCY" | Unrecognized<string>
```