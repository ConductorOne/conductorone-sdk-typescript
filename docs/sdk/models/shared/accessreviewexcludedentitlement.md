# AccessReviewExcludedEntitlement

An entitlement excluded from a user-first access review campaign's scope.

## Example Usage

```typescript
import { AccessReviewExcludedEntitlement } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessReviewExcludedEntitlement = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `accessReviewId`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the access review campaign this exclusion belongs to.                               |
| `appEntitlementId`                                                                            | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the entitlement excluded from scope.                                                |
| `appId`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the application that owns the entitlement.                                          |
| `appResourceId`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the specific resource associated with this entitlement, if applicable.              |
| `appResourceTypeId`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the resource type associated with this entitlement, if applicable.                  |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `deletedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `tenantId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The tenant that owns this exclusion.                                                          |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |