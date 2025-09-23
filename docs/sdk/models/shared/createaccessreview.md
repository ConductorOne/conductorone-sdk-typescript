# CreateAccessReview

The CreateAccessReview message.

## Example Usage

```typescript
import { CreateAccessReview } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CreateAccessReview = {};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `accessReviewTemplateCel`                                                                           | *string*                                                                                            | :heavy_minus_sign:                                                                                  | The accessReviewTemplateCel field.                                                                  |
| `accessReviewTemplateId`                                                                            | *string*                                                                                            | :heavy_minus_sign:                                                                                  | The accessReviewTemplateId field.                                                                   |
| `campaignName`                                                                                      | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Optional campaign name. If not provided, the campaign name will be the access review template name. |
| `useSubjectUser`                                                                                    | *boolean*                                                                                           | :heavy_minus_sign:                                                                                  | If true, the step will use the subject user of the automation as the subject.                       |
| `userIdsCel`                                                                                        | *string*                                                                                            | :heavy_minus_sign:                                                                                  | The userIdsCel field.                                                                               |
| `userRefs`                                                                                          | [shared.UserRef](../../../sdk/models/shared/userref.md)[]                                           | :heavy_minus_sign:                                                                                  | The userRefs field.                                                                                 |