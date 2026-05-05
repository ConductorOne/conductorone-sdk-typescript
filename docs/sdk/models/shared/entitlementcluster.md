# EntitlementCluster

The EntitlementCluster message.

## Example Usage

```typescript
import { EntitlementCluster } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EntitlementCluster = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `avgCoverage`                                                                 | *number*                                                                      | :heavy_minus_sign:                                                            | The avgCoverage field.                                                        |
| `avgSimilarity`                                                               | *number*                                                                      | :heavy_minus_sign:                                                            | The avgSimilarity field.                                                      |
| `entitlements`                                                                | [shared.CohortEntitlement](../../../sdk/models/shared/cohortentitlement.md)[] | :heavy_minus_sign:                                                            | The entitlements field.                                                       |
| `userCount`                                                                   | *number*                                                                      | :heavy_minus_sign:                                                            | The userCount field.                                                          |