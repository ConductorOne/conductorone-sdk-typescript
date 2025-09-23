# UserStatus

The status of the user in the system.

## Example Usage

```typescript
import { UserStatus } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UserStatus = "UNKNOWN";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"UNKNOWN" | "ENABLED" | "DISABLED" | "DELETED" | Unrecognized<string>
```