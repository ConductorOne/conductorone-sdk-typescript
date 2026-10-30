# AddClassifierRuleFromTemplateRequest

The AddClassifierRuleFromTemplateRequest message.

## Example Usage

```typescript
import { AddClassifierRuleFromTemplateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AddClassifierRuleFromTemplateRequest = {
  templateId: "<id>",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `insertIndex`                                                                                                        | *number*                                                                                                             | :heavy_minus_sign:                                                                                                   | Position in the target cascade to insert before. Pass the current rule<br/> count to append. Values past the end append. |
| `params`                                                                                                             | Record<string, *string*>                                                                                             | :heavy_minus_sign:                                                                                                   | Bind-time param values for the spliced rule's grant gates, keyed by<br/> TemplateParam.key (e.g. grant_policy_id).   |
| `ruleIndex`                                                                                                          | *number*                                                                                                             | :heavy_minus_sign:                                                                                                   | Which rule in the template to add; defaults to 0 (the first/only rule).                                              |
| `templateId`                                                                                                         | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Template to source the rule from.                                                                                    |
| `templateVersion`                                                                                                    | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | Optional; empty resolves the latest version.                                                                         |