# AccessReviewTemplateExcludedResourceType

A resource type whose grants are excluded from a user-first access review template's scope.

## Example Usage

```typescript
import { AccessReviewTemplateExcludedResourceType } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessReviewTemplateExcludedResourceType = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `accessReviewTemplateId`                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the access review template this exclusion belongs to.                               |
| `appId`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the application that owns the resource type.                                        |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `deletedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `resourceTypeId`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the resource type excluded from scope.                                              |
| `tenantId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The tenant that owns this exclusion.                                                          |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |