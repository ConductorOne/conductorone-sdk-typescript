# EntitlementCutoffImpactPoint

EntitlementCutoffImpactPoint reports the exact effect of an inclusive
 entitlement coverage cutoff on the analyzed cohort.

## Example Usage

```typescript
import { EntitlementCutoffImpactPoint } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EntitlementCutoffImpactPoint = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `entitlementCount`                                                         | *number*                                                                   | :heavy_minus_sign:                                                         | Number of analyzed entitlements included at this cutoff.                   |
| `minimumCoverageBasisPoints`                                               | *number*                                                                   | :heavy_minus_sign:                                                         | Inclusive minimum entitlement coverage in basis points, where 8000 is 80%. |
| `usersWithAllEntitlements`                                                 | *number*                                                                   | :heavy_minus_sign:                                                         | Exact number of cohort users who hold every included entitlement.          |