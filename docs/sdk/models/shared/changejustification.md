# ChangeJustification

The ChangeJustification message.

## Example Usage

```typescript
import { ChangeJustification } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ChangeJustification = {};
```

## Fields

| Field                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                   | Required                                                                                                                                                                                                               | Description                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `reason`                                                                                                                                                                                                               | *string*                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                     | The operator's reason for changing connector configuration. Change control currently applies to<br/> Update, UpdateAllowIgnoreList, UpdateSyncResourceTypesConfig, UpdateAdvancedConfig, and UpdateConnectorSchedule only. |