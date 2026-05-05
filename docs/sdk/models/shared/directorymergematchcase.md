# DirectoryMergeMatchCase

DirectoryMergeMatchCase defines a pair of CEL key extractors for matching.

## Example Usage

```typescript
import { DirectoryMergeMatchCase } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DirectoryMergeMatchCase = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `appUserKeyCel`                                                      | *string*                                                             | :heavy_minus_sign:                                                   | CEL expression evaluated against an AppUser to produce match key(s). |
| `userKeyCel`                                                         | *string*                                                             | :heavy_minus_sign:                                                   | CEL expression evaluated against a User to produce match key(s).     |