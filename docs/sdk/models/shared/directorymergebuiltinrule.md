# DirectoryMergeBuiltinRule

DirectoryMergeBuiltinRule is a built-in rule. Matching is done natively.

## Example Usage

```typescript
import { DirectoryMergeBuiltinRule } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DirectoryMergeBuiltinRule = {};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `description`                                                                                       | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Set by the server.                                                                                  |
| `displayName`                                                                                       | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Set by the server.                                                                                  |
| `kind`                                                                                              | [shared.DirectoryMergeBuiltinRuleKind](../../../sdk/models/shared/directorymergebuiltinrulekind.md) | :heavy_minus_sign:                                                                                  | Which built-in rule this is.                                                                        |