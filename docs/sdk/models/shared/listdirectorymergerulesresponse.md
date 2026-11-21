# ListDirectoryMergeRulesResponse

The ListDirectoryMergeRulesResponse message.

## Example Usage

```typescript
import { ListDirectoryMergeRulesResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ListDirectoryMergeRulesResponse = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `rules`                                                                         | [shared.DirectoryMergeRule](../../../sdk/models/shared/directorymergerule.md)[] | :heavy_minus_sign:                                                              | Every rule in evaluation order, built-in rules included.                        |