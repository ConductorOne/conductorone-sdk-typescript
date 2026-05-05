# C1OnboardingPlanCategory

C1OnboardingPlanCategory groups related plan steps under a section heading.

## Example Usage

```typescript
import { C1OnboardingPlanCategory } from "conductorone-sdk-typescript/sdk/models/shared";

let value: C1OnboardingPlanCategory = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `id`                                                                                | *string*                                                                            | :heavy_minus_sign:                                                                  | The id field.                                                                       |
| `steps`                                                                             | [shared.C1OnboardingPlanStep](../../../sdk/models/shared/c1onboardingplanstep.md)[] | :heavy_minus_sign:                                                                  | The steps field.                                                                    |
| `title`                                                                             | *string*                                                                            | :heavy_minus_sign:                                                                  | The title field.                                                                    |