# State

The state field.

## Example Usage

```typescript
import { State } from "conductorone-sdk-typescript/sdk/models/shared";

let value: State = "ACCESS_REVIEW_STATE_OPEN";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ACCESS_REVIEW_STATE_UNSPECIFIED" | "ACCESS_REVIEW_STATE_OPEN" | "ACCESS_REVIEW_STATE_CLOSED" | "ACCESS_REVIEW_STATE_PENDING" | "ACCESS_REVIEW_STATE_REVIEW" | "ACCESS_REVIEW_STATE_PREPARING" | "ACCESS_REVIEW_STATE_STARTING" | "ACCESS_REVIEW_STATE_DRAFT" | "ACCESS_REVIEW_STATE_DELETING" | "ACCESS_REVIEW_STATE_DELETED" | "ACCESS_REVIEW_STATE_RESETTING_POLICIES" | "ACCESS_REVIEW_STATE_COPYING_SETUP_ENTITLEMENTS" | "ACCESS_REVIEW_STATE_COPYING_RESOURCE_TYPE_SELECTIONS" | Unrecognized<string>
```