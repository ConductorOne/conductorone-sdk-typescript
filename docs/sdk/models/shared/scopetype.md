# ScopeType

The type of scoping method for the campaign (e.g., by entitlements, by access conflicts, or by resource).

## Example Usage

```typescript
import { ScopeType } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ScopeType = "ACCESS_REVIEW_SCOPE_TYPE_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"ACCESS_REVIEW_SCOPE_TYPE_UNSPECIFIED" | "ACCESS_REVIEW_SCOPE_TYPE_BY_ENTITLEMENTS" | "ACCESS_REVIEW_SCOPE_TYPE_BY_ACCESS_CONFLICTS" | "ACCESS_REVIEW_SCOPE_TYPE_BY_RESOURCE" | "ACCESS_REVIEW_SCOPE_TYPE_BY_INHERITANCE" | Unrecognized<string>
```