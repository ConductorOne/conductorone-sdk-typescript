# UpdateRoleMiningConfigRequest

The UpdateRoleMiningConfigRequest message.

## Example Usage

```typescript
import { UpdateRoleMiningConfigRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UpdateRoleMiningConfigRequest = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `cohortHints`                                                             | [shared.CohortHintInput](../../../sdk/models/shared/cohorthintinput.md)[] | :heavy_minus_sign:                                                        | The cohortHints field.                                                    |
| `maxSuggestions`                                                          | *number*                                                                  | :heavy_minus_sign:                                                        | The maxSuggestions field.                                                 |
| `minCohortSize`                                                           | *number*                                                                  | :heavy_minus_sign:                                                        | The minCohortSize field.                                                  |