# C1ApiAppV2AppOwnersCreateUserOwnerRequest

## Example Usage

```typescript
import { C1ApiAppV2AppOwnersCreateUserOwnerRequest } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2AppOwnersCreateUserOwnerRequest = {
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
| `createUserOwnerRequest`                                                              | [shared.CreateUserOwnerRequest](../../../sdk/models/shared/createuserownerrequest.md) | :heavy_minus_sign:                                                                    | N/A                                                                                   |