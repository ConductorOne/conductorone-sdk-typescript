# C1ApiAppV2AppOwnersDeleteUserOwnerRequest

## Example Usage

```typescript
import { C1ApiAppV2AppOwnersDeleteUserOwnerRequest } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2AppOwnersDeleteUserOwnerRequest = {
  appId: "<id>",
  roleSlug: "<value>",
  userRefId: "<id>",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `appId`                                                                               | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `roleSlug`                                                                            | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `userRefId`                                                                           | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `deleteUserOwnerRequest`                                                              | [shared.DeleteUserOwnerRequest](../../../sdk/models/shared/deleteuserownerrequest.md) | :heavy_minus_sign:                                                                    | N/A                                                                                   |