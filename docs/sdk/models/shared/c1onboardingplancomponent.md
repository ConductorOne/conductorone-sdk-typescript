# C1OnboardingPlanComponent

C1OnboardingPlanComponent renders a personalized onboarding plan with categorized steps.
 The agent dynamically populates categories and steps based on user intent and context.

## Example Usage

```typescript
import { C1OnboardingPlanComponent } from "conductorone-sdk-typescript/sdk/models/shared";

let value: C1OnboardingPlanComponent = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `categories`                                                                                | [shared.C1OnboardingPlanCategory](../../../sdk/models/shared/c1onboardingplancategory.md)[] | :heavy_minus_sign:                                                                          | The categories field.                                                                       |