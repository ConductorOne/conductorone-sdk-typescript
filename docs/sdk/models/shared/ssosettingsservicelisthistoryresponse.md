# SSOSettingsServiceListHistoryResponse

SSOSettingsServiceListHistoryResponse returns SSO settings history entries.

## Example Usage

```typescript
import { SSOSettingsServiceListHistoryResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SSOSettingsServiceListHistoryResponse = {};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `list`                                                                                    | [shared.SSOSettingsHistoryEntry](../../../sdk/models/shared/ssosettingshistoryentry.md)[] | :heavy_minus_sign:                                                                        | The page of history entries, newest first.                                                |
| `nextPageToken`                                                                           | *string*                                                                                  | :heavy_minus_sign:                                                                        | Pagination token for the next page, or empty if there are no more results.                |