# SetDirectoryMergeRulesResponse

The SetDirectoryMergeRulesResponse message.

## Example Usage

```typescript
import { SetDirectoryMergeRulesResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SetDirectoryMergeRulesResponse = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `rules`                                                                         | [shared.DirectoryMergeRule](../../../sdk/models/shared/directorymergerule.md)[] | :heavy_minus_sign:                                                              | Every rule in evaluation order, built-in rules included.                        |