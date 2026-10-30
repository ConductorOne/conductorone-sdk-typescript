# AccessProfileComponentReviewSubjectInput

A component of the profile's definition.

This message contains a oneof named detail. Only a single field of the following list may be set at a time:
  - composition
  - membershipCriteria


## Example Usage

```typescript
import { AccessProfileComponentReviewSubjectInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessProfileComponentReviewSubjectInput = {};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `composition`                                                                                                                         | [shared.AccessProfileCompositionReviewItem](../../../sdk/models/shared/accessprofilecompositionreviewitem.md)                         | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   |
| `membershipCriteria`                                                                                                                  | [shared.AccessProfileMembershipCriteriaReviewItemInput](../../../sdk/models/shared/accessprofilemembershipcriteriareviewiteminput.md) | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   |
| `profile`                                                                                                                             | [shared.AccessProfileRef](../../../sdk/models/shared/accessprofileref.md)                                                             | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   |