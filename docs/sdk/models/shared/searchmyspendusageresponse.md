# SearchMySpendUsageResponse

SearchMySpendUsageResponse contains one page of caller-only usage.

## Example Usage

```typescript
import { SearchMySpendUsageResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SearchMySpendUsageResponse = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `list`                                                                    | [shared.MySpendUsageRow](../../../sdk/models/shared/myspendusagerow.md)[] | :heavy_minus_sign:                                                        | The list field.                                                           |
| `nextPageToken`                                                           | *string*                                                                  | :heavy_minus_sign:                                                        | The nextPageToken field.                                                  |