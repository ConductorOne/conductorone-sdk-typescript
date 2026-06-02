# C1ApiAppV2AppResourceOwnersV2DeleteUserOwnerRequest

## Example Usage

```typescript
import { C1ApiAppV2AppResourceOwnersV2DeleteUserOwnerRequest } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2AppResourceOwnersV2DeleteUserOwnerRequest = {
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
| `deleteAppResourceUserOwnerRequest`                                                                         | [shared.DeleteAppResourceUserOwnerRequest](../../../sdk/models/shared/deleteappresourceuserownerrequest.md) | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |