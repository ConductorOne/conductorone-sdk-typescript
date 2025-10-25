# C1ApiAppV1AppResourceOwnersDeleteRequest

## Example Usage

```typescript
import { C1ApiAppV1AppResourceOwnersDeleteRequest } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1AppResourceOwnersDeleteRequest = {
  appId: "<id>",
  resourceTypeId: "<id>",
  resourceId: "<id>",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `appId`                                                                                               | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `resourceTypeId`                                                                                      | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `resourceId`                                                                                          | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `deleteAppResourceOwnersRequest`                                                                      | [shared.DeleteAppResourceOwnersRequest](../../../sdk/models/shared/deleteappresourceownersrequest.md) | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |