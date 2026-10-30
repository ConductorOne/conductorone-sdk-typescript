# EdgeFindingSettingsEntry

EdgeFindingSettingsEntry is a requested change to one category. Separate
 from EdgeFindingCategorySetting for the same reason FindingSettingsEntry is:
 an update needs enum validation and presence on `enabled`.

## Example Usage

```typescript
import { EdgeFindingSettingsEntry } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeFindingSettingsEntry = {};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `category`                                                                                                | [shared.EdgeFindingSettingsEntryCategory](../../../sdk/models/shared/edgefindingsettingsentrycategory.md) | :heavy_minus_sign:                                                                                        | The category field.                                                                                       |
| `enabled`                                                                                                 | *boolean*                                                                                                 | :heavy_minus_sign:                                                                                        | Target state. Required: an omitted field must not read as false.                                          |