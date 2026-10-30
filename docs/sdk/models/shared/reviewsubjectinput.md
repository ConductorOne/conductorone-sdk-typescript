# ReviewSubjectInput

The explicitly stored item under review. Legacy tasks may have no subject.

This message contains a oneof named kind. Only a single field of the following list may be set at a time:
  - entitlementAccess
  - profileComponent


## Example Usage

```typescript
import { ReviewSubjectInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ReviewSubjectInput = {};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `entitlementAccess`                                                                                                       | [shared.EntitlementAccessReviewSubject](../../../sdk/models/shared/entitlementaccessreviewsubject.md)                     | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |
| `profileComponent`                                                                                                        | [shared.AccessProfileComponentReviewSubjectInput](../../../sdk/models/shared/accessprofilecomponentreviewsubjectinput.md) | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |