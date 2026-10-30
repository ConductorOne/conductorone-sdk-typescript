# XAASettingsServiceListHistoryResponse

XAASettingsServiceListHistoryResponse returns cross-app-access settings
 history entries.

## Example Usage

```typescript
import { XAASettingsServiceListHistoryResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: XAASettingsServiceListHistoryResponse = {};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `list`                                                                                    | [shared.XAASettingsHistoryEntry](../../../sdk/models/shared/xaasettingshistoryentry.md)[] | :heavy_minus_sign:                                                                        | The page of history entries, newest first.                                                |
| `nextPageToken`                                                                           | *string*                                                                                  | :heavy_minus_sign:                                                                        | Pagination token for the next page, or empty if there are no more results.                |