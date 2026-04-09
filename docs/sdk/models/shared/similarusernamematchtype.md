# SimilarUsernameMatchType

SimilarUsernameMatchType: an app user's username is similar to an
 identity user's username, suggesting they should be linked.
 Target: AppUserTarget (the unlinked/mislinked app user account).

## Example Usage

```typescript
import { SimilarUsernameMatchType } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SimilarUsernameMatchType = {};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `proposedIdentityUserId`                                      | *string*                                                      | :heavy_minus_sign:                                            | The proposed identity user this app user should be linked to. |