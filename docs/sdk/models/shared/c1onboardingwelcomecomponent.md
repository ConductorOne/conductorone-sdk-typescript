# C1OnboardingWelcomeComponent

C1OnboardingWelcomeComponent renders the onboarding welcome screen with org context and intent collection.
 Backend pre-populates recommended_catalog_id / recommended_display_name from detected IDP.
 Frontend detects auth backend via introspect for contextual UI text.

## Example Usage

```typescript
import { C1OnboardingWelcomeComponent } from "conductorone-sdk-typescript/sdk/models/shared";

let value: C1OnboardingWelcomeComponent = {};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `recommendedCatalogId`            | *string*                          | :heavy_minus_sign:                | The recommendedCatalogId field.   |
| `recommendedDisplayName`          | *string*                          | :heavy_minus_sign:                | The recommendedDisplayName field. |