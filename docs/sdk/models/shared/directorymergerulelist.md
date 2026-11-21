# DirectoryMergeRuleList

DirectoryMergeRuleList wraps a full rule list so a request can tell "unchanged" (absent) from a new list.

## Example Usage

```typescript
import { DirectoryMergeRuleList } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DirectoryMergeRuleList = {};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `rules`                                                                                                                             | [shared.DirectoryMergeRuleInput](../../../sdk/models/shared/directorymergeruleinput.md)[]                                           | :heavy_minus_sign:                                                                                                                  | Every rule in the desired evaluation order, built-in rules included. Same rules and limits as<br/> SetDirectoryMergeRulesRequest.rules. |