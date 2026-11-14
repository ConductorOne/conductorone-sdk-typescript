# AccessConflictEntitlementPairMatch

AccessConflictEntitlementPairMatch is the entitlement pair behind an
 access-conflict finding.

## Example Usage

```typescript
import { AccessConflictEntitlementPairMatch } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessConflictEntitlementPairMatch = {};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `groupAAppEntitlementId`                        | *string*                                        | :heavy_minus_sign:                              | The group A entitlement the user holds.         |
| `groupAAppId`                                   | *string*                                        | :heavy_minus_sign:                              | The app of the group A entitlement.             |
| `groupAAppUserId`                               | *string*                                        | :heavy_minus_sign:                              | The account that holds the group A entitlement. |
| `groupBAppEntitlementId`                        | *string*                                        | :heavy_minus_sign:                              | The group B entitlement the user holds.         |
| `groupBAppId`                                   | *string*                                        | :heavy_minus_sign:                              | The app of the group B entitlement.             |
| `groupBAppUserId`                               | *string*                                        | :heavy_minus_sign:                              | The account that holds the group B entitlement. |