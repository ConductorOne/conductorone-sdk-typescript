# CohortUserWithCoverage

CohortUserWithCoverage pairs a user with the count of selected entitlements they hold.

## Example Usage

```typescript
import { CohortUserWithCoverage } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CohortUserWithCoverage = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `coveredCount`                                                                          | *number*                                                                                | :heavy_minus_sign:                                                                      | Number of selected_entitlements that this user currently holds.                         |
| `user`                                                                                  | [shared.User](../../../sdk/models/shared/user.md)                                       | :heavy_minus_sign:                                                                      | The User object provides all of the details for an user, as well as some configuration. |