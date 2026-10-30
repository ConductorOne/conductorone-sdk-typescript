# ScopeObjectType

When scope_view is POLICY_SCOPE_VIEW_SCOPED, narrow local policies to a
 coarse object type (app-local vs entitlement-local).

## Example Usage

```typescript
import { ScopeObjectType } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ScopeObjectType = "POLICY_SCOPE_OBJECT_TYPE_ENTITLEMENT";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"POLICY_SCOPE_OBJECT_TYPE_UNSPECIFIED" | "POLICY_SCOPE_OBJECT_TYPE_APP" | "POLICY_SCOPE_OBJECT_TYPE_ENTITLEMENT" | Unrecognized<string>
```