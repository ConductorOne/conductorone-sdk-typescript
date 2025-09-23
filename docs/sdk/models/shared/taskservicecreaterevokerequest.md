# TaskServiceCreateRevokeRequest

Create a revoke task.

## Example Usage

```typescript
import { TaskServiceCreateRevokeRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskServiceCreateRevokeRequest = {
  appEntitlementId: "<id>",
  appId: "<id>",
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `appEntitlementId`                                                                                                              | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | The ID of the app entitlement to revoke access to.                                                                              |
| `appId`                                                                                                                         | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | The ID of the app associated with the entitlement.                                                                              |
| `appUserId`                                                                                                                     | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | The ID of the app user to revoke access from. This field and identityUserId cannot both be set for a given request.             |
| `description`                                                                                                                   | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | The description of the request.                                                                                                 |
| `expandMask`                                                                                                                    | [shared.TaskExpandMask](../../../sdk/models/shared/taskexpandmask.md)                                                           | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |
| `identityUserId`                                                                                                                | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | The ID of the user associated with the app user we are revoking access from. This field cannot be set if appUserID is also set. |