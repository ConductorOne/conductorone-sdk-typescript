# ScopeType

How the campaign's scope is defined, such as by entitlements or by users. Treated as
 ACCESS_REVIEW_SCOPE_TYPE_BY_ENTITLEMENTS when unset. Some scope types require a feature to be
 enabled for your tenant. See AccessReviewScopeType for the available values.

## Example Usage

```typescript
import { ScopeType } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ScopeType = "ACCESS_REVIEW_SCOPE_TYPE_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"ACCESS_REVIEW_SCOPE_TYPE_UNSPECIFIED" | "ACCESS_REVIEW_SCOPE_TYPE_BY_ENTITLEMENTS" | "ACCESS_REVIEW_SCOPE_TYPE_BY_ACCESS_CONFLICTS" | "ACCESS_REVIEW_SCOPE_TYPE_BY_RESOURCE" | "ACCESS_REVIEW_SCOPE_TYPE_BY_INHERITANCE" | "ACCESS_REVIEW_SCOPE_TYPE_BY_USERS" | "ACCESS_REVIEW_SCOPE_TYPE_BY_ACCESS_PROFILES" | Unrecognized<string>
```