# AppUserType

The appplication user type. Type can be user, system or service.

## Example Usage

```typescript
import { AppUserType } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppUserType = "APP_USER_TYPE_SYSTEM_ACCOUNT";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"APP_USER_TYPE_UNSPECIFIED" | "APP_USER_TYPE_USER" | "APP_USER_TYPE_SERVICE_ACCOUNT" | "APP_USER_TYPE_SYSTEM_ACCOUNT" | Unrecognized<string>
```