# AppUserMergeRuleSet

The ordered rules that decide which existing account an incoming account record
 belongs to. Rules are tried in order and the first enabled rule that matches wins.

## Example Usage

```typescript
import { AppUserMergeRuleSet } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppUserMergeRuleSet = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `appId`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the application these rules belong to.                                              |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `ruleSetVersion`                                                                              | *number*                                                                                      | :heavy_minus_sign:                                                                            | The version of the rule set. It increases by one every time the rules are saved.              |
| `rules`                                                                                       | [shared.AppUserMergeRule](../../../sdk/models/shared/appusermergerule.md)[]                   | :heavy_minus_sign:                                                                            | The rules, in the order they are tried.                                                       |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |