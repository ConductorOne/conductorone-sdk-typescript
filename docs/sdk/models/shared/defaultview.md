# DefaultView

the default view that reviewers will see when they complete their access reviews

## Example Usage

```typescript
import { DefaultView } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DefaultView = "ACCESS_REVIEW_VIEW_TYPE_BY_APP";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ACCESS_REVIEW_VIEW_TYPE_UNSPECIFIED" | "ACCESS_REVIEW_VIEW_TYPE_BY_APP" | "ACCESS_REVIEW_VIEW_TYPE_BY_USER" | "ACCESS_REVIEW_VIEW_TYPE_UNSTRUCTURED" | Unrecognized<string>
```