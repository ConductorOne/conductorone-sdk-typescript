# SortField

Column to sort by. Unspecified (0) means sort by created_at desc (server default).

## Example Usage

```typescript
import { SortField } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SortField = "AUTOMATION_SORT_FIELD_DISPLAY_NAME";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"AUTOMATION_SORT_FIELD_UNSPECIFIED" | "AUTOMATION_SORT_FIELD_DISPLAY_NAME" | "AUTOMATION_SORT_FIELD_CREATED_AT" | "AUTOMATION_SORT_FIELD_LAST_EXECUTED_AT" | "AUTOMATION_SORT_FIELD_ENABLED" | "AUTOMATION_SORT_FIELD_PRIMARY_TRIGGER_TYPE" | Unrecognized<string>
```