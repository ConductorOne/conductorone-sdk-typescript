# SuggestedOwnerReason

The SuggestedOwnerReason message.

## Example Usage

```typescript
import { SuggestedOwnerReason } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SuggestedOwnerReason = {};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `denominator`                                                                             | *number*                                                                                  | :heavy_minus_sign:                                                                        | The denominator field.                                                                    |
| `kind`                                                                                    | [shared.SuggestedOwnerReasonKind](../../../sdk/models/shared/suggestedownerreasonkind.md) | :heavy_minus_sign:                                                                        | The kind field.                                                                           |
| `numerator`                                                                               | *number*                                                                                  | :heavy_minus_sign:                                                                        | The numerator field.                                                                      |
| `percent`                                                                                 | *number*                                                                                  | :heavy_minus_sign:                                                                        | 0..100, derived from numerator / denominator.                                             |
| `relatedId`                                                                               | *string*                                                                                  | :heavy_minus_sign:                                                                        | Entitlement, sibling resource or replaced user ID; never free text.                       |