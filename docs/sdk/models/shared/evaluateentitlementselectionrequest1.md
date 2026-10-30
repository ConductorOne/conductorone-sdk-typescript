# EvaluateEntitlementSelectionRequest1

EvaluateEntitlementSelectionRequest selects analyzed entitlements using an
 inclusive coverage cutoff plus optional manual overrides.

## Example Usage

```typescript
import { EvaluateEntitlementSelectionRequest1 } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EvaluateEntitlementSelectionRequest1 = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `analysisId`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | Custom analysis whose cohort and entitlement results define the selection. |
| `explicitlyExcluded`                                                       | [shared.EntitlementRef](../../../sdk/models/shared/entitlementref.md)[]    | :heavy_minus_sign:                                                         | Analyzed entitlements to exclude when they meet the cutoff.                |
| `explicitlyIncluded`                                                       | [shared.EntitlementRef](../../../sdk/models/shared/entitlementref.md)[]    | :heavy_minus_sign:                                                         | Analyzed entitlements to include even when they fall below the cutoff.     |
| `includeFacets`                                                            | *boolean*                                                                  | :heavy_minus_sign:                                                         | Whether to return profile attribute facets for exact holders.              |
| `minimumCoverageBasisPoints`                                               | *number*                                                                   | :heavy_minus_sign:                                                         | Inclusive minimum entitlement coverage in basis points, where 8000 is 80%. |