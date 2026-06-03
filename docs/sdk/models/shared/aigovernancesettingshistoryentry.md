# AIGovernanceSettingsHistoryEntry

The AIGovernanceSettingsHistoryEntry message.

## Example Usage

```typescript
import { AIGovernanceSettingsHistoryEntry } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AIGovernanceSettingsHistoryEntry = {};
```

## Fields

| Field                                                                                                                                                                                          | Type                                                                                                                                                                                           | Required                                                                                                                                                                                       | Description                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `historyEntryMetadata`                                                                                                                                                                         | [shared.HistoryEntryMetadata](../../../sdk/models/shared/historyentrymetadata.md)                                                                                                              | :heavy_minus_sign:                                                                                                                                                                             | HistoryEntryMetadata is the shared metadata envelope embedded on every<br/> per-service HistoryEntry. The strongly-typed snapshot lives on the<br/> per-service entry message alongside this envelope. |
| `aiGovernanceSettings`                                                                                                                                                                         | [shared.AIGovernanceSettings](../../../sdk/models/shared/aigovernancesettings.md)                                                                                                              | :heavy_minus_sign:                                                                                                                                                                             | The AIGovernanceSettings message.                                                                                                                                                              |