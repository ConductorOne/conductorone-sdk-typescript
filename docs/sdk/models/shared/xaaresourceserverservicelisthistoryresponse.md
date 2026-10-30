# XAAResourceServerServiceListHistoryResponse

XAAResourceServerServiceListHistoryResponse returns resource server history
 entries.

## Example Usage

```typescript
import { XAAResourceServerServiceListHistoryResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: XAAResourceServerServiceListHistoryResponse = {};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `list`                                                                                                | [shared.XAAResourceServerHistoryEntry](../../../sdk/models/shared/xaaresourceserverhistoryentry.md)[] | :heavy_minus_sign:                                                                                    | The page of history entries, newest first.                                                            |
| `nextPageToken`                                                                                       | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Pagination token for the next page, or empty if there are no more results.                            |