# AppUserSourceReasonMerged

The merge that moved a record onto its account.

## Example Usage

```typescript
import { AppUserSourceReasonMerged } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppUserSourceReasonMerged = {};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `actorUserId`                                      | *string*                                           | :heavy_minus_sign:                                 | The ID of the user who confirmed the merge.        |
| `mergeRecordId`                                    | *string*                                           | :heavy_minus_sign:                                 | The ID of the merge's record in the merge history. |
| `planId`                                           | *string*                                           | :heavy_minus_sign:                                 | The ID of the merge batch the merge belonged to.   |
| `previousAppUserId`                                | *string*                                           | :heavy_minus_sign:                                 | The ID of the account the record was moved off.    |