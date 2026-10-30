# SortField

Column to sort by. Unspecified (0) keeps the server's default order (app, then display name).

## Example Usage

```typescript
import { SortField } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SortField = "APP_RESOURCE_SORT_FIELD_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"APP_RESOURCE_SORT_FIELD_UNSPECIFIED" | "APP_RESOURCE_SORT_FIELD_SECRET_CREATED_AT" | "APP_RESOURCE_SORT_FIELD_SECRET_EXPIRES_AT" | "APP_RESOURCE_SORT_FIELD_LAST_USED_AT" | Unrecognized<string>
```