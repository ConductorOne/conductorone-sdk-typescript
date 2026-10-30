# EdgeFindingType

EdgeFindingType identifies an Edge finding: one rule matching one subject on
 one Edge. Target: TenantTarget.

## Example Usage

```typescript
import { EdgeFindingType } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeFindingType = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `appId`                                                                                 | *string*                                                                                | :heavy_minus_sign:                                                                      | The app the Edge belongs to.                                                            |
| `category`                                                                              | [shared.EdgeFindingTypeCategory](../../../sdk/models/shared/edgefindingtypecategory.md) | :heavy_minus_sign:                                                                      | The category field.                                                                     |
| `edgeId`                                                                                | *string*                                                                                | :heavy_minus_sign:                                                                      | The Edge (app resource id) whose traffic matched.                                       |
| `ruleId`                                                                                | *string*                                                                                | :heavy_minus_sign:                                                                      | Stable rule id, e.g. "EDGE-DEST-FIRST-SEEN".                                            |
| `subcategory`                                                                           | [shared.Subcategory](../../../sdk/models/shared/subcategory.md)                         | :heavy_minus_sign:                                                                      | Set only for EDGE_FINDING_CATEGORY_AI_USAGE.                                            |
| `subject`                                                                               | *string*                                                                                | :heavy_minus_sign:                                                                      | What the finding is about, e.g. a destination host.                                     |