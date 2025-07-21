# AppUserServiceUpdateResponse

The AppUserServiceUpdateResponse message.

## Example Usage

```typescript
import { AppUserServiceUpdateResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppUserServiceUpdateResponse = {};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `appUserView`                                                                                                       | [shared.AppUserView](../../../sdk/models/shared/appuserview.md)                                                     | :heavy_minus_sign:                                                                                                  | The AppUserView contains an app user as well as paths for apps, identity users, and last usage in expanded arrays.  |
| `expanded`                                                                                                          | [shared.AppUserServiceUpdateResponseExpanded](../../../sdk/models/shared/appuserserviceupdateresponseexpanded.md)[] | :heavy_minus_sign:                                                                                                  | The expanded field.                                                                                                 |