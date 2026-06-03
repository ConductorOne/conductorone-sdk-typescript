# AppUserView

The AppUserView contains an app user as well as paths for apps, identity users, and last usage in expanded arrays.

## Example Usage

```typescript
import { AppUserView } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppUserView = {};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `appPath`                                                                                                                | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | JSONPATH expression indicating where the app is expanded in expanded arrays indicated in the request.                    |
| `appUser`                                                                                                                | [shared.AppUser](../../../sdk/models/shared/appuser.md)                                                                  | :heavy_minus_sign:                                                                                                       | Application User that represents an account in the application.                                                          |
| `identityUserPath`                                                                                                       | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | JSONPATH expression indicating where the identity user is expanded in expanded arrays indicated in the request.          |
| `lastUsagePath`                                                                                                          | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | JSONPATH expression indicating where the last usage information is expanded in expanded arrays indicated in the request. |