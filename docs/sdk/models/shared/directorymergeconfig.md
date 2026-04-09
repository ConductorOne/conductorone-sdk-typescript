# DirectoryMergeConfig

DirectoryMergeConfig configures how AppUsers from this directory are matched to C1 Users.

## Example Usage

```typescript
import { DirectoryMergeConfig } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DirectoryMergeConfig = {};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `matchCases`                                                                              | [shared.DirectoryMergeMatchCase](../../../sdk/models/shared/directorymergematchcase.md)[] | :heavy_minus_sign:                                                                        | Ordered list of match cases evaluated in sequence. First match wins.                      |