# AppUserInput

Application User that represents an account in the application.

## Example Usage

```typescript
import { AppUserInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppUserInput = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `appUserType`                                                                 | [shared.AppUserType](../../../sdk/models/shared/appusertype.md)               | :heavy_minus_sign:                                                            | The appplication user type. Type can be user, system or service.              |
| `appUserStatus`                                                               | [shared.AppUserStatusInput](../../../sdk/models/shared/appuserstatusinput.md) | :heavy_minus_sign:                                                            | The satus of the applicaiton user.                                            |