# AppEntitlementSearchServiceSearchGraphRequest

SearchGraph request. Builds a filtered access graph starting from a root entity.
 Exactly one of user_id, app_id, or resource_id must be set.
 Server validates this constraint and returns InvalidArgument if violated.

## Example Usage

```typescript
import { AppEntitlementSearchServiceSearchGraphRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppEntitlementSearchServiceSearchGraphRequest = {};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `appId`                                                | *string*                                               | :heavy_minus_sign:                                     | The appId field.                                       |
| `appIds`                                               | *string*[]                                             | :heavy_minus_sign:                                     | Filters — all optional, applied at every traversal hop |
| `entitlementIds`                                       | *string*[]                                             | :heavy_minus_sign:                                     | The entitlementIds field.                              |
| `entitlementNameQuery`                                 | *string*                                               | :heavy_minus_sign:                                     | The entitlementNameQuery field.                        |
| `maxDepth`                                             | *number*                                               | :heavy_minus_sign:                                     | Traversal controls                                     |
| `maxFanOut`                                            | *number*                                               | :heavy_minus_sign:                                     | The maxFanOut field.                                   |
| `pageSize`                                             | *number*                                               | :heavy_minus_sign:                                     | The pageSize field.                                    |
| `pageToken`                                            | *string*                                               | :heavy_minus_sign:                                     | The pageToken field.                                   |
| `resourceId`                                           | *string*                                               | :heavy_minus_sign:                                     | The resourceId field.                                  |
| `resourceIds`                                          | *string*[]                                             | :heavy_minus_sign:                                     | The resourceIds field.                                 |
| `resourceNameQuery`                                    | *string*                                               | :heavy_minus_sign:                                     | The resourceNameQuery field.                           |
| `resourceTypeIds`                                      | *string*[]                                             | :heavy_minus_sign:                                     | The resourceTypeIds field.                             |
| `userId`                                               | *string*                                               | :heavy_minus_sign:                                     | Root entity — exactly one must be set                  |