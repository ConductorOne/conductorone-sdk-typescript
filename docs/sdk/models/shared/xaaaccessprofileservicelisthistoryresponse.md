# XAAAccessProfileServiceListHistoryResponse

XAAAccessProfileServiceListHistoryResponse returns access profile history
 entries.

## Example Usage

```typescript
import { XAAAccessProfileServiceListHistoryResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: XAAAccessProfileServiceListHistoryResponse = {};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `list`                                                                                              | [shared.XAAAccessProfileHistoryEntry](../../../sdk/models/shared/xaaaccessprofilehistoryentry.md)[] | :heavy_minus_sign:                                                                                  | The page of history entries, newest first.                                                          |
| `nextPageToken`                                                                                     | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Pagination token for the next page, or empty if there are no more results.                          |