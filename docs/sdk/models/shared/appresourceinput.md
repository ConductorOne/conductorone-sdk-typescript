# AppResourceInput

The app resource message is a single resource that can have entitlements.

## Example Usage

```typescript
import { AppResourceInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppResourceInput = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `appId`                                                                       | *string*                                                                      | :heavy_minus_sign:                                                            | The app that this resource belongs to.                                        |
| `appResourceTypeId`                                                           | *string*                                                                      | :heavy_minus_sign:                                                            | The resource type that this resource is.                                      |
| `customDescription`                                                           | *string*                                                                      | :heavy_minus_sign:                                                            | A custom description that can be set for a resource.                          |
| `displayName`                                                                 | *string*                                                                      | :heavy_minus_sign:                                                            | The display name for this resource.                                           |
| `grantCount`                                                                  | *number*                                                                      | :heavy_minus_sign:                                                            | The number of grants to this resource.                                        |
| `id`                                                                          | *string*                                                                      | :heavy_minus_sign:                                                            | The id of the resource.                                                       |
| `parentAppResourceId`                                                         | *string*                                                                      | :heavy_minus_sign:                                                            | The parent resource id, if this resource is a child of another resource.      |
| `parentAppResourceTypeId`                                                     | *string*                                                                      | :heavy_minus_sign:                                                            | The parent resource type id, if this resource is a child of another resource. |