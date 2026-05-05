# WriteAuthorizationConfig

WriteAuthorizationConfig blocks tool calls whose ToolClassification is in
 blocked_classifications, optionally permitting them within business hours.

## Example Usage

```typescript
import { WriteAuthorizationConfig } from "conductorone-sdk-typescript/sdk/models/shared";

let value: WriteAuthorizationConfig = {};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `blockedClassifications`                                                                                                                 | [shared.BlockedClassifications](../../../sdk/models/shared/blockedclassifications.md)[]                                                  | :heavy_minus_sign:                                                                                                                       | Tool classifications to block. Must have at least one entry; a hook<br/> with no blocked classifications would be a silent misconfiguration. |
| `businessHours`                                                                                                                          | [shared.BusinessHours](../../../sdk/models/shared/businesshours.md)                                                                      | :heavy_minus_sign:                                                                                                                       | BusinessHours defines a weekly time window in a specific timezone.                                                                       |