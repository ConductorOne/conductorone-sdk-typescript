# ScopeView

Which policies to return based on scope. Defaults to global-only, so
 app/entitlement-scoped policies never appear unless explicitly requested.
 Ignored when refs are provided (explicit ID lookups always resolve).

## Example Usage

```typescript
import { ScopeView } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ScopeView = "POLICY_SCOPE_VIEW_ALL";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"POLICY_SCOPE_VIEW_UNSPECIFIED" | "POLICY_SCOPE_VIEW_GLOBAL" | "POLICY_SCOPE_VIEW_SCOPED" | "POLICY_SCOPE_VIEW_ALL" | "POLICY_SCOPE_VIEW_GLOBAL_AND_OBJECT" | Unrecognized<string>
```