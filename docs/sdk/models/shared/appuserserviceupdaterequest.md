# AppUserServiceUpdateRequest

The AppUserServiceUpdateRequest message contains the app user and the fields to be updated.

## Example Usage

```typescript
import { AppUserServiceUpdateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppUserServiceUpdateRequest = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `appUser`                                                                         | [shared.AppUserInput](../../../sdk/models/shared/appuserinput.md)                 | :heavy_minus_sign:                                                                | Application User that represents an account in the application.                   |
| `appUserExpandMask`                                                               | [shared.AppUserExpandMask](../../../sdk/models/shared/appuserexpandmask.md)       | :heavy_minus_sign:                                                                | The AppUserExpandMask message contains a list of paths to expand in the response. |
| `updateMask`                                                                      | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |