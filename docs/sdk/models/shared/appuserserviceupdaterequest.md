# AppUserServiceUpdateRequest

The AppUserServiceUpdateRequest message contains the app user and the fields to be updated.

## Example Usage

```typescript
import { AppUserServiceUpdateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppUserServiceUpdateRequest = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `appUser`                                                                   | [shared.AppUserInput](../../../sdk/models/shared/appuserinput.md)           | :heavy_minus_sign:                                                          | N/A                                                                         |
| `expandMask`                                                                | [shared.AppUserExpandMask](../../../sdk/models/shared/appuserexpandmask.md) | :heavy_minus_sign:                                                          | N/A                                                                         |
| `updateMask`                                                                | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |