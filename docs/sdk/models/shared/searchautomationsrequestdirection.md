# SearchAutomationsRequestDirection

Direction to sort in. Unspecified falls back to ASC when sort_field is set;
 when sort_field is also unspecified, the server default order (created_at
 DESC) applies.

## Example Usage

```typescript
import { SearchAutomationsRequestDirection } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SearchAutomationsRequestDirection = "SORT_DIRECTION_DESC";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"SORT_DIRECTION_UNSPECIFIED" | "SORT_DIRECTION_ASC" | "SORT_DIRECTION_DESC" | Unrecognized<string>
```