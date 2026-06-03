# ListAIGovernanceSettingsHistoryResponse

The ListAIGovernanceSettingsHistoryResponse message.

## Example Usage

```typescript
import { ListAIGovernanceSettingsHistoryResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ListAIGovernanceSettingsHistoryResponse = {};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `list`                                                                                                      | [shared.AIGovernanceSettingsHistoryEntry](../../../sdk/models/shared/aigovernancesettingshistoryentry.md)[] | :heavy_minus_sign:                                                                                          | The list field.                                                                                             |
| `nextPageToken`                                                                                             | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | The nextPageToken field.                                                                                    |