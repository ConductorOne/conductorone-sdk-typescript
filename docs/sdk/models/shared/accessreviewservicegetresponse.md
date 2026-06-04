# AccessReviewServiceGetResponse

The AccessReviewServiceGetResponse message.

## Example Usage

```typescript
import { AccessReviewServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessReviewServiceGetResponse = {};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `accessReview`                                                                                                          | [shared.AccessReviewView](../../../sdk/models/shared/accessreviewview.md)                                               | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| `expanded`                                                                                                              | [shared.AccessReviewServiceGetResponseExpanded](../../../sdk/models/shared/accessreviewservicegetresponseexpanded.md)[] | :heavy_minus_sign:                                                                                                      | Related objects requested via the expand mask.                                                                          |