# AppUserMergeRule

One account merge rule: either a built-in rule or a CEL rule.

This message contains a oneof named kind. Only a single field of the following list may be set at a time:
  - builtin
  - cel


## Example Usage

```typescript
import { AppUserMergeRule } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppUserMergeRule = {};
```

## Fields

| Field                                                                                                                                                                             | Type                                                                                                                                                                              | Required                                                                                                                                                                          | Description                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `builtin`                                                                                                                                                                         | [shared.AppUserMergeRuleBuiltin](../../../sdk/models/shared/appusermergerulebuiltin.md)                                                                                           | :heavy_minus_sign:                                                                                                                                                                | A built-in rule. Each built-in rule may appear at most once.<br/>This field is part of the `kind` oneof.<br/>See the documentation for `c1.api.app.v1.AppUserMergeRule` for more details. |
| `cel`                                                                                                                                                                             | [shared.AppUserMergeCelRule](../../../sdk/models/shared/appusermergecelrule.md)                                                                                                   | :heavy_minus_sign:                                                                                                                                                                | N/A                                                                                                                                                                               |
| `enabled`                                                                                                                                                                         | *boolean*                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                | Whether the rule is tried. Disabled rules are kept in place but skipped.                                                                                                          |
| `id`                                                                                                                                                                              | *string*                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                | The rule's ID, unique within the rule set. Built-in rules have fixed IDs:<br/> "builtin-primary-email", "builtin-any-email" and "builtin-username".                               |