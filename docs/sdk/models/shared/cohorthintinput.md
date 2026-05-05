# CohortHintInput

The CohortHintInput message.

## Example Usage

```typescript
import { CohortHintInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CohortHintInput = {};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `attribute`                                                                                             | *string*                                                                                                | :heavy_minus_sign:                                                                                      | The user attribute name to use for cohort grouping (e.g., "department", "job_title").                   |
| `priority`                                                                                              | *number*                                                                                                | :heavy_minus_sign:                                                                                      | Relative priority of this hint. Higher values cause the analysis to weight this attribute more heavily. |
| `values`                                                                                                | *string*[]                                                                                              | :heavy_minus_sign:                                                                                      | Specific attribute values to focus on. If empty, all values for the attribute are considered.           |