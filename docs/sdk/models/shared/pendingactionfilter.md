# PendingActionFilter

Filter tasks by pending action status. Only applies when exactly one access_review_id is specified.
 Requires the REVIEWS_PENDING_ACTIONS feature flag to be enabled.

## Example Usage

```typescript
import { PendingActionFilter } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PendingActionFilter = "PENDING_ACTION_FILTER_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"PENDING_ACTION_FILTER_UNSPECIFIED" | "PENDING_ACTION_FILTER_WITH_PENDING" | "PENDING_ACTION_FILTER_WITHOUT_PENDING" | Unrecognized<string>
```