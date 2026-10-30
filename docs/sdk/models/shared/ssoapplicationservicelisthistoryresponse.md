# SSOApplicationServiceListHistoryResponse

SSOApplicationServiceListHistoryResponse returns SSO application history
 entries.

## Example Usage

```typescript
import { SSOApplicationServiceListHistoryResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SSOApplicationServiceListHistoryResponse = {};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `list`                                                                                          | [shared.SSOApplicationHistoryEntry](../../../sdk/models/shared/ssoapplicationhistoryentry.md)[] | :heavy_minus_sign:                                                                              | The page of history entries, newest first.                                                      |
| `nextPageToken`                                                                                 | *string*                                                                                        | :heavy_minus_sign:                                                                              | Pagination token for the next page, or empty if there are no more results.                      |