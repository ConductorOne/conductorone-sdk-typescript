# DirectoryMergeCustomRule

DirectoryMergeCustomRule is a custom rule defined by a pair of CEL expressions whose keys are compared
 exactly as returned.

## Example Usage

```typescript
import { DirectoryMergeCustomRule } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DirectoryMergeCustomRule = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `appUserKeyCel`                                                                  | *string*                                                                         | :heavy_minus_sign:                                                               | A CEL expression over `account` returning a string or list of strings. Required. |
| `description`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | Optional.                                                                        |
| `displayName`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | Required. Unique among the directory's rules, ignoring case.                     |
| `userKeyCel`                                                                     | *string*                                                                         | :heavy_minus_sign:                                                               | A CEL expression over `subject` returning a string or list of strings. Required. |