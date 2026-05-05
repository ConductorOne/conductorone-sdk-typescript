# FunctionsServiceGetLockFileResponse

FunctionsServiceGetLockFileResponse returns the deno lock file content for a commit.

## Example Usage

```typescript
import { FunctionsServiceGetLockFileResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FunctionsServiceGetLockFileResponse = {};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `content`                                                   | *string*                                                    | :heavy_minus_sign:                                          | The raw content of the deno lock file (empty if not found). |
| `exists`                                                    | *boolean*                                                   | :heavy_minus_sign:                                          | Whether the lock file exists for this commit.               |