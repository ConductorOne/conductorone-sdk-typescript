# AppUserMergeRulesServiceUpdateRequest

The AppUserMergeRulesServiceUpdateRequest message contains the new rules for an application.

## Example Usage

```typescript
import { AppUserMergeRulesServiceUpdateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppUserMergeRulesServiceUpdateRequest = {};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `expectedRuleSetVersion`                                                                                                                           | *number*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The rule_set_version the new rules are based on. If the stored version differs, the<br/> update fails with FAILED_PRECONDITION and nothing is changed. |
| `rules`                                                                                                                                            | [shared.AppUserMergeRule](../../../sdk/models/shared/appusermergerule.md)[]                                                                        | :heavy_minus_sign:                                                                                                                                 | The complete new list of rules, in the order they are tried. It replaces the current list.                                                         |