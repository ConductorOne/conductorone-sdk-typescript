# CustomAnalysisResultView

CustomAnalysisResultView is a lightweight summary of a past custom analysis run.

## Example Usage

```typescript
import { CustomAnalysisResultView } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CustomAnalysisResultView = {};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `cohortSize`                                                                                          | *number*                                                                                              | :heavy_minus_sign:                                                                                    | Number of users in the cohort.                                                                        |
| `completedAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `createdAt`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `errorMessage`                                                                                        | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Error message if the analysis failed, empty on success.                                               |
| `id`                                                                                                  | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Unique identifier for this custom analysis result.                                                    |
| `profileFilters`                                                                                      | [shared.ProfileFilter](../../../sdk/models/shared/profilefilter.md)[]                                 | :heavy_minus_sign:                                                                                    | Profile filters that defined the cohort for this analysis.                                            |
| `status`                                                                                              | [shared.CustomAnalysisResultViewStatus](../../../sdk/models/shared/customanalysisresultviewstatus.md) | :heavy_minus_sign:                                                                                    | Execution status of this analysis (e.g., running, completed, failed).                                 |
| `suggestionsGenerated`                                                                                | *number*                                                                                              | :heavy_minus_sign:                                                                                    | Number of role suggestions generated.                                                                 |