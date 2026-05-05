# UpdateRoleMiningConfigRequest

The UpdateRoleMiningConfigRequest message.

## Example Usage

```typescript
import { UpdateRoleMiningConfigRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UpdateRoleMiningConfigRequest = {};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `cohortHints`                                                                                         | [shared.CohortHintInput](../../../sdk/models/shared/cohorthintinput.md)[]                             | :heavy_minus_sign:                                                                                    | Hints that guide the analysis to prioritize specific user attributes and values when forming cohorts. |
| `maxSuggestions`                                                                                      | *number*                                                                                              | :heavy_minus_sign:                                                                                    | Maximum number of suggestions the analysis should produce per run.                                    |
| `minCohortSize`                                                                                       | *number*                                                                                              | :heavy_minus_sign:                                                                                    | Minimum number of users a cohort must contain to generate a suggestion.                               |