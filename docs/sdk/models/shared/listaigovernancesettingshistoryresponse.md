# ListAIGovernanceSettingsHistoryResponse

ListAIGovernanceSettingsHistoryResponse contains a page of AI governance
 settings change-history entries, newest first.

## Example Usage

```typescript
import { ListAIGovernanceSettingsHistoryResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ListAIGovernanceSettingsHistoryResponse = {};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `list`                                                                                                      | [shared.AIGovernanceSettingsHistoryEntry](../../../sdk/models/shared/aigovernancesettingshistoryentry.md)[] | :heavy_minus_sign:                                                                                          | The page of history entries, newest first.                                                                  |
| `nextPageToken`                                                                                             | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | Pagination token for the next page, or empty if there are no more results.                                  |