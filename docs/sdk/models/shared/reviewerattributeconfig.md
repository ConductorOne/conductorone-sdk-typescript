# ReviewerAttributeConfig

Allowlist of AppUser.profile keys visible to reviewers, scoped per app.
 Empty = reviewers see no profile attributes in the AppUser tooltip.

## Example Usage

```typescript
import { ReviewerAttributeConfig } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ReviewerAttributeConfig = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `bindings`                                                                                  | [shared.ReviewerAttributeBinding](../../../sdk/models/shared/reviewerattributebinding.md)[] | :heavy_minus_sign:                                                                          | The bindings field.                                                                         |