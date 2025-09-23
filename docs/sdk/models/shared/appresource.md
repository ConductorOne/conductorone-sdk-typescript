# AppResource

The app resource message is a single resource that can have entitlements.

This message contains a oneof named metadata. Only a single field of the following list may be set at a time:
  - secretTrait


## Example Usage

```typescript
import { AppResource } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppResource = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `appId`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | The app that this resource belongs to.                                                        |
| `appResourceTypeId`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | The resource type that this resource is.                                                      |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `customDescription`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | A custom description that can be set for a resource.                                          |
| `deletedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The description set for the resource.                                                         |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The display name for this resource.                                                           |
| `grantCount`                                                                                  | *number*                                                                                      | :heavy_minus_sign:                                                                            | The number of grants to this resource.                                                        |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The id of the resource.                                                                       |
| `matchBatonId`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | The matchBatonId field.                                                                       |
| `parentAppResourceId`                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | The parent resource id, if this resource is a child of another resource.                      |
| `parentAppResourceTypeId`                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | The parent resource type id, if this resource is a child of another resource.                 |
| `secretTrait`                                                                                 | [shared.SecretTrait](../../../sdk/models/shared/secrettrait.md)                               | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |