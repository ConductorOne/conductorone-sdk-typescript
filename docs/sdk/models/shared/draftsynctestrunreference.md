# DraftSyncTestRunReference

DraftSyncTestRunReference identifies retained draft-test statistics for this connector's installation.

## Example Usage

```typescript
import { DraftSyncTestRunReference } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DraftSyncTestRunReference = {};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `catalogId`                                               | *string*                                                  | :heavy_minus_sign:                                        | Tenant-authored catalog entry that owns the installation. |
| `revisionId`                                              | *string*                                                  | :heavy_minus_sign:                                        | Revision used by the draft test.                          |
| `testRunId`                                               | *string*                                                  | :heavy_minus_sign:                                        | Draft test run whose execution statistics are requested.  |