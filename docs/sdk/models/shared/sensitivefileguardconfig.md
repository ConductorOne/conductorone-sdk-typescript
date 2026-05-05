# SensitiveFileGuardConfig

SensitiveFileGuardConfig blocks tool calls that reference sensitive file
 paths or directories.

## Example Usage

```typescript
import { SensitiveFileGuardConfig } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SensitiveFileGuardConfig = {};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `blockedDirectories`          | *string*[]                    | :heavy_minus_sign:            | The blockedDirectories field. |
| `blockedPatterns`             | *string*[]                    | :heavy_minus_sign:            | The blockedPatterns field.    |