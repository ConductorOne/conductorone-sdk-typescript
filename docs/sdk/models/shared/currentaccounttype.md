# CurrentAccountType

What the account is currently classified as in ConductorOne.

## Example Usage

```typescript
import { CurrentAccountType } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CurrentAccountType = "APP_USER_TYPE_SYSTEM_ACCOUNT";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"APP_USER_TYPE_UNSPECIFIED" | "APP_USER_TYPE_USER" | "APP_USER_TYPE_SERVICE_ACCOUNT" | "APP_USER_TYPE_SYSTEM_ACCOUNT" | Unrecognized<string>
```