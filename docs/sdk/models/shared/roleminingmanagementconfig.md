# RoleMiningManagementConfig

The RoleMiningManagementConfig message.

## Example Usage

```typescript
import { RoleMiningManagementConfig } from "conductorone-sdk-typescript/sdk/models/shared";

let value: RoleMiningManagementConfig = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `cohortHints`                                                                      | [shared.CohortHintView](../../../sdk/models/shared/cohorthintview.md)[]            | :heavy_minus_sign:                                                                 | Configured cohort hints that guide which user attributes the analysis prioritizes. |
| `maxSuggestions`                                                                   | *number*                                                                           | :heavy_minus_sign:                                                                 | Maximum number of suggestions the analysis will produce per run.                   |
| `minCohortSize`                                                                    | *number*                                                                           | :heavy_minus_sign:                                                                 | Minimum number of users a cohort must contain to generate a suggestion.            |