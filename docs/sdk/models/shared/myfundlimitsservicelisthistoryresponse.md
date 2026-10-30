# MyFundLimitsServiceListHistoryResponse

The MyFundLimitsServiceListHistoryResponse message.

## Example Usage

```typescript
import { MyFundLimitsServiceListHistoryResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MyFundLimitsServiceListHistoryResponse = {};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `list`                                                                                    | [shared.MyFundLimitHistoryEntry](../../../sdk/models/shared/myfundlimithistoryentry.md)[] | :heavy_minus_sign:                                                                        | The list field.                                                                           |
| `nextPageToken`                                                                           | *string*                                                                                  | :heavy_minus_sign:                                                                        | The nextPageToken field.                                                                  |