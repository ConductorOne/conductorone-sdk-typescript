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
| `expanded`                                                                                                                | [shared.AccessReviewServiceListResponseExpanded](../../../sdk/models/shared/accessreviewservicelistresponseexpanded.md)[] | :heavy_minus_sign:                                                                                                        | The expanded field.                                                                                                       |
| `list`                                                                                                                    | [shared.AccessReviewView](../../../sdk/models/shared/accessreviewview.md)[]                                               | :heavy_minus_sign:                                                                                                        | The list field.                                                                                                           |
| `nextPageToken`                                                                                                           | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | The nextPageToken field.                                                                                                  |