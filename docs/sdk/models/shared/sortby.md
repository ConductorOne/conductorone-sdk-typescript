# SortBy

Sort tasks in a specific order.

## Example Usage

```typescript
import { SortBy } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SortBy = "TASK_SEARCH_SORT_BY_REVERSE_CREATED_AT";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"TASK_SEARCH_SORT_BY_UNSPECIFIED" | "TASK_SEARCH_SORT_BY_ACCOUNT" | "TASK_SEARCH_SORT_BY_RESOURCE" | "TASK_SEARCH_SORT_BY_ACCOUNT_OWNER" | "TASK_SEARCH_SORT_BY_REVERSE_TICKET_ID" | "TASK_SEARCH_SORT_BY_TICKET_ID" | "TASK_SEARCH_SORT_BY_CREATED_AT" | "TASK_SEARCH_SORT_BY_REVERSE_CREATED_AT" | Unrecognized<string>
```