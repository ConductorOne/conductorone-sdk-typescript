# MyFundLimitsServiceListResponse

The MyFundLimitsServiceListResponse message.

## Example Usage

```typescript
import { MyFundLimitsServiceListResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MyFundLimitsServiceListResponse = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `list`                                                            | [shared.MyFundLimit](../../../sdk/models/shared/myfundlimit.md)[] | :heavy_minus_sign:                                                | The list field.                                                   |
| `nextPageToken`                                                   | *string*                                                          | :heavy_minus_sign:                                                | The nextPageToken field.                                          |