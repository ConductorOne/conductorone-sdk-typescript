# FunctionsServiceGetCommitContentResponse

FunctionsServiceGetCommitContentResponse contains a commit and all its file contents.

## Example Usage

```typescript
import { FunctionsServiceGetCommitContentResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FunctionsServiceGetCommitContentResponse = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `functionCommit`                                                      | [shared.FunctionCommit](../../../sdk/models/shared/functioncommit.md) | :heavy_minus_sign:                                                    | FunctionCommit represents a single commit in a function's history     |
| `files`                                                               | Record<string, *string*>                                              | :heavy_minus_sign:                                                    | Map of filename to file content bytes.                                |