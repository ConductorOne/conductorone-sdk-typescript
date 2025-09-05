# C1ApiAppV1AppResourceOwnersRemoveRequest

## Example Usage

```typescript
import { C1ApiAppV1AppResourceOwnersRemoveRequest } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1AppResourceOwnersRemoveRequest = {
  appId: "<id>",
  resourceTypeId: "<id>",
  resourceId: "<id>",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `appId`                                                                                             | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `resourceTypeId`                                                                                    | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `resourceId`                                                                                        | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `removeAppResourceOwnerRequest`                                                                     | [shared.RemoveAppResourceOwnerRequest](../../../sdk/models/shared/removeappresourceownerrequest.md) | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |