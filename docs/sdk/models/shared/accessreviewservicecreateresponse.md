# AccessReviewServiceCreateResponse

The AccessReviewServiceCreateResponse message.

## Example Usage

```typescript
import { AccessReviewServiceCreateResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessReviewServiceCreateResponse = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `accessReview`                                                            | [shared.AccessReviewView](../../../sdk/models/shared/accessreviewview.md) | :heavy_minus_sign:                                                        | N/A                                                                       |
| `expanded`                                                                | [shared.Expanded](../../../sdk/models/shared/expanded.md)[]               | :heavy_minus_sign:                                                        | Related objects requested via the expand mask.                            |