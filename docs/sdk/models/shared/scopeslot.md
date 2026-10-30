# ScopeSlot

When scope_view narrows to one object, only return that object's local
 policies in this slot. Ignored when no object is identified by
 scope_app_id, which lists every local policy regardless of slot.

## Example Usage

```typescript
import { ScopeSlot } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ScopeSlot = "POLICY_SCOPE_SLOT_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"POLICY_SCOPE_SLOT_UNSPECIFIED" | "POLICY_SCOPE_SLOT_EMERGENCY" | Unrecognized<string>
```