# XAAScopeServiceListHistoryResponse

XAAScopeServiceListHistoryResponse returns scope history entries.

## Example Usage

```typescript
import { XAAScopeServiceListHistoryResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: XAAScopeServiceListHistoryResponse = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `list`                                                                              | [shared.XAAScopeHistoryEntry](../../../sdk/models/shared/xaascopehistoryentry.md)[] | :heavy_minus_sign:                                                                  | The page of history entries, newest first.                                          |
| `nextPageToken`                                                                     | *string*                                                                            | :heavy_minus_sign:                                                                  | Pagination token for the next page, or empty if there are no more results.          |