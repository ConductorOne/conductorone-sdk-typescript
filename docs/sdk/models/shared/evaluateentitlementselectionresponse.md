# EvaluateEntitlementSelectionResponse

EvaluateEntitlementSelectionResponse contains the exact impact of the
 resolved entitlement selection.

## Example Usage

```typescript
import { EvaluateEntitlementSelectionResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EvaluateEntitlementSelectionResponse = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `coreHolderFacets`                                                              | [shared.AttributeFacet](../../../sdk/models/shared/attributefacet.md)[]         | :heavy_minus_sign:                                                              | Profile attribute facets narrowed to users who hold every selected entitlement. |
| `selectedEntitlementCount`                                                      | *number*                                                                        | :heavy_minus_sign:                                                              | Number of entitlements in the resolved selection.                               |
| `usersWithAllEntitlements`                                                      | *number*                                                                        | :heavy_minus_sign:                                                              | Exact number of cohort users who hold every selected entitlement.               |