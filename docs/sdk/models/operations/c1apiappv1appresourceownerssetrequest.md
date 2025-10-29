# C1ApiAppV1AppResourceOwnersSetRequest

## Example Usage

```typescript
import { C1ApiAppV1AppResourceOwnersSetRequest } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1AppResourceOwnersSetRequest = {
  appId: "<id>",
  resourceTypeId: "<id>",
  resourceId: "<id>",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `appId`                                                                                         | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `resourceTypeId`                                                                                | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `resourceId`                                                                                    | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `setAppResourceOwnersRequest`                                                                   | [shared.SetAppResourceOwnersRequest](../../../sdk/models/shared/setappresourceownersrequest.md) | :heavy_minus_sign:                                                                              | N/A                                                                                             |