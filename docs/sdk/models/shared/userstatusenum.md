# UserStatusEnum

The userStatusEnum field.
This field is part of the `user_status` oneof.
See the documentation for `c1.api.automations.v1.UpdateUser` for more details.

## Example Usage

```typescript
import { UserStatusEnum } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UserStatusEnum = "DELETED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"UNKNOWN" | "ENABLED" | "DISABLED" | "DELETED" | Unrecognized<string>
```