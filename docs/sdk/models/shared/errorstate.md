# ErrorState

Error state set when a prepare action fails with a recoverable condition.
 Cleared when the campaign scope is changed.

## Example Usage

```typescript
import { ErrorState } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ErrorState = "ACCESS_REVIEW_ERROR_STATE_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"ACCESS_REVIEW_ERROR_STATE_UNSPECIFIED" | "ACCESS_REVIEW_ERROR_STATE_SELECTION_QUOTA_EXCEED_ERROR" | Unrecognized<string>
```