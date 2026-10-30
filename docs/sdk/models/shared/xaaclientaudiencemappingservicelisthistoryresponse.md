# XAAClientAudienceMappingServiceListHistoryResponse

XAAClientAudienceMappingServiceListHistoryResponse returns client audience
 mapping history entries.

## Example Usage

```typescript
import { XAAClientAudienceMappingServiceListHistoryResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: XAAClientAudienceMappingServiceListHistoryResponse = {};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `list`                                                                                                              | [shared.XAAClientAudienceMappingHistoryEntry](../../../sdk/models/shared/xaaclientaudiencemappinghistoryentry.md)[] | :heavy_minus_sign:                                                                                                  | The page of history entries, newest first.                                                                          |
| `nextPageToken`                                                                                                     | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | Pagination token for the next page, or empty if there are no more results.                                          |