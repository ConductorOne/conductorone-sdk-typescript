# AccessConflictAWithoutBMatch

AccessConflictAWithoutBMatch is the group A entitlement behind an
 access-conflict finding for a user who holds none of the monitor's group B
 entitlements.

## Example Usage

```typescript
import { AccessConflictAWithoutBMatch } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessConflictAWithoutBMatch = {};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `groupAAppEntitlementId`                        | *string*                                        | :heavy_minus_sign:                              | The group A entitlement the user holds.         |
| `groupAAppId`                                   | *string*                                        | :heavy_minus_sign:                              | The app of the group A entitlement.             |
| `groupAAppUserId`                               | *string*                                        | :heavy_minus_sign:                              | The account that holds the group A entitlement. |