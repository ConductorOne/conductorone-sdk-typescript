# RoleMiningManagementConfig

The RoleMiningManagementConfig message.

## Example Usage

```typescript
import { RoleMiningManagementConfig } from "conductorone-sdk-typescript/sdk/models/shared";

let value: RoleMiningManagementConfig = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `cohortHints`                                                           | [shared.CohortHintView](../../../sdk/models/shared/cohorthintview.md)[] | :heavy_minus_sign:                                                      | The cohortHints field.                                                  |
| `maxSuggestions`                                                        | *number*                                                                | :heavy_minus_sign:                                                      | The maxSuggestions field.                                               |
| `minCohortSize`                                                         | *number*                                                                | :heavy_minus_sign:                                                      | The minCohortSize field.                                                |