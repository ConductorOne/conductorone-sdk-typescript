# PrincipalTypeFilter

Filters principals included in the scope. Unspecified is treated as users.

## Example Usage

```typescript
import { PrincipalTypeFilter } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PrincipalTypeFilter = "PRINCIPAL_TYPE_FILTER_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"PRINCIPAL_TYPE_FILTER_UNSPECIFIED" | "PRINCIPAL_TYPE_FILTER_USERS" | "PRINCIPAL_TYPE_FILTER_RESOURCES" | "PRINCIPAL_TYPE_FILTER_USERS_AND_RESOURCES" | Unrecognized<string>
```