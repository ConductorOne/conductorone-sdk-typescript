# AppUserMergeRuleBuiltin

A built-in rule. Each built-in rule may appear at most once.
This field is part of the `kind` oneof.
See the documentation for `c1.api.app.v1.AppUserMergeRule` for more details.

## Example Usage

```typescript
import { AppUserMergeRuleBuiltin } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppUserMergeRuleBuiltin = "APP_USER_MERGE_BUILTIN_RULE_ANY_EMAIL";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"APP_USER_MERGE_BUILTIN_RULE_UNSPECIFIED" | "APP_USER_MERGE_BUILTIN_RULE_PRIMARY_EMAIL" | "APP_USER_MERGE_BUILTIN_RULE_ANY_EMAIL" | "APP_USER_MERGE_BUILTIN_RULE_USERNAME" | Unrecognized<string>
```