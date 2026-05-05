# EntitlementExclusionCriteria

The EntitlementExclusionCriteria message.

## Example Usage

```typescript
import { EntitlementExclusionCriteria } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EntitlementExclusionCriteria = {};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `excludedAppIds`                          | *string*[]                                | :heavy_minus_sign:                        | The excludedAppIds field.                 |
| `excludedComplianceFrameworkIds`          | *string*[]                                | :heavy_minus_sign:                        | The excludedComplianceFrameworkIds field. |
| `excludedResourceTypeIds`                 | *string*[]                                | :heavy_minus_sign:                        | The excludedResourceTypeIds field.        |
| `excludedRiskLevelIds`                    | *string*[]                                | :heavy_minus_sign:                        | The excludedRiskLevelIds field.           |