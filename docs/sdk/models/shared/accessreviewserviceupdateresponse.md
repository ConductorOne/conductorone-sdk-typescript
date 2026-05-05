# AccessReviewServiceUpdateResponse

The AccessReviewServiceUpdateResponse message.

## Example Usage

```typescript
import { AccessReviewServiceUpdateResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessReviewServiceUpdateResponse = {};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `accessReviewView`                                                                                                            | [shared.AccessReviewView](../../../sdk/models/shared/accessreviewview.md)                                                     | :heavy_minus_sign:                                                                                                            | The AccessReviewView message.                                                                                                 |
| `expanded`                                                                                                                    | [shared.AccessReviewServiceUpdateResponseExpanded](../../../sdk/models/shared/accessreviewserviceupdateresponseexpanded.md)[] | :heavy_minus_sign:                                                                                                            | Related objects requested via the expand mask.                                                                                |