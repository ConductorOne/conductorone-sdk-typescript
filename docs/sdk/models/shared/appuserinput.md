# AppUserInput

Application User that represents an account in the application.

## Example Usage

```typescript
import { AppUserInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppUserInput = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `appUserType`                                                                                 | [shared.AppUserType](../../../sdk/models/shared/appusertype.md)                               | :heavy_minus_sign:                                                                            | The appplication user type. Type can be user, system or service.                              |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `deletedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `profile`                                                                                     | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [shared.AppUserStatusInput](../../../sdk/models/shared/appuserstatusinput.md)                 | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |