# SuggestedOwner

SuggestedOwner is a candidate owner for an unowned NHI.

## Example Usage

```typescript
import { SuggestedOwner } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SuggestedOwner = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `confidencePercent`                                                                 | *number*                                                                            | :heavy_minus_sign:                                                                  | Max of reasons[].percent at detection time.                                         |
| `reasons`                                                                           | [shared.SuggestedOwnerReason](../../../sdk/models/shared/suggestedownerreason.md)[] | :heavy_minus_sign:                                                                  | The reasons field.                                                                  |
| `userId`                                                                            | *string*                                                                            | :heavy_minus_sign:                                                                  | C1 User ID; readers resolve the name.                                               |