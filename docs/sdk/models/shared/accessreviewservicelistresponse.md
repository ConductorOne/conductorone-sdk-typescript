# AccessReviewServiceListResponse

The AccessReviewServiceListResponse message.

## Example Usage

```typescript
import { AccessReviewServiceListResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessReviewServiceListResponse = {};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `expanded`                                                                                                                | [shared.AccessReviewServiceListResponseExpanded](../../../sdk/models/shared/accessreviewservicelistresponseexpanded.md)[] | :heavy_minus_sign:                                                                                                        | Related objects requested via the expand mask.                                                                            |
| `list`                                                                                                                    | [shared.AccessReviewView](../../../sdk/models/shared/accessreviewview.md)[]                                               | :heavy_minus_sign:                                                                                                        | The list of access review campaigns for the current page.                                                                 |
| `nextPageToken`                                                                                                           | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | Token to retrieve the next page, or empty if there are no more results.                                                   |