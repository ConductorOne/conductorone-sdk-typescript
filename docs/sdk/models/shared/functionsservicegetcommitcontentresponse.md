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
| `commit`                                                              | [shared.FunctionCommit](../../../sdk/models/shared/functioncommit.md) | :heavy_minus_sign:                                                    | N/A                                                                   |
| `files`                                                               | Record<string, *string*>                                              | :heavy_minus_sign:                                                    | Map of filename to file content bytes.                                |