# C1ApiAppV2AppResourceOwnersV2CreateUserOwnerRequest

## Example Usage

```typescript
import { C1ApiAppV2AppResourceOwnersV2CreateUserOwnerRequest } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2AppResourceOwnersV2CreateUserOwnerRequest = {
  appId: "<id>",
  resourceTypeId: "<id>",
  resourceId: "<id>",
  roleSlug: "<value>",
  userRefId: "<id>",
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `appId`                                                                                                     | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `resourceTypeId`                                                                                            | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `resourceId`                                                                                                | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `roleSlug`                                                                                                  | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `userRefId`                                                                                                 | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `createAppResourceUserOwnerRequest`                                                                         | [shared.CreateAppResourceUserOwnerRequest](../../../sdk/models/shared/createappresourceuserownerrequest.md) | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |