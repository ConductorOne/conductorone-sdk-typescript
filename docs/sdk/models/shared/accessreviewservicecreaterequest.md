# AccessReviewServiceCreateRequest

The AccessReviewServiceCreateRequest message.

## Example Usage

```typescript
import { AccessReviewServiceCreateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessReviewServiceCreateRequest = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `completionDate`                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The description field.                                                                        |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The displayName field.                                                                        |
| `duplicateFrom`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | The duplicateFrom field.                                                                      |
| `accessReviewExpandMask`                                                                      | [shared.AccessReviewExpandMask](../../../sdk/models/shared/accessreviewexpandmask.md)         | :heavy_minus_sign:                                                                            | The AccessReviewExpandMask message.                                                           |
| `notificationConfig`                                                                          | [shared.NotificationConfig](../../../sdk/models/shared/notificationconfig.md)                 | :heavy_minus_sign:                                                                            | The NotificationConfig message.                                                               |
| `ownerIds`                                                                                    | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | The ownerIds field.                                                                           |
| `policyId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The policyId field.                                                                           |
| `scopeType`                                                                                   | [shared.ScopeType](../../../sdk/models/shared/scopetype.md)                                   | :heavy_minus_sign:                                                                            | The scopeType field.                                                                          |