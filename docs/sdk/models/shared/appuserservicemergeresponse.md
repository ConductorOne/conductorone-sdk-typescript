# AppUserServiceMergeResponse

The AppUserServiceMergeResponse returns the target app user after the merge.

## Example Usage

```typescript
import { AppUserServiceMergeResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppUserServiceMergeResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `appUserView`                                                                            | [shared.AppUserView](../../../sdk/models/shared/appuserview.md)                          | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `mergeId`                                                                                | *string*                                                                                 | :heavy_minus_sign:                                                                       | The ID of the merge record written for this merge.                                       |
| `recordsMoved`                                                                           | *number*                                                                                 | :heavy_minus_sign:                                                                       | The number of connector and external source records moved from the source to the target. |