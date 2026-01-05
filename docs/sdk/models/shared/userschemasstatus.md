# UserSchemasStatus

The status of the user in the system.

## Example Usage

```typescript
import { UserSchemasStatus } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UserSchemasStatus = "UNKNOWN";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"UNKNOWN" | "ENABLED" | "DISABLED" | "DELETED" | Unrecognized<string>
```