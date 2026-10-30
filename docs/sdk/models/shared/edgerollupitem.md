# EdgeRollupItem

EdgeRollupItem identifies one authorized Edge and what it serves.

## Example Usage

```typescript
import { EdgeRollupItem } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeRollupItem = {};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `appId`                                                                                         | *string*                                                                                        | :heavy_minus_sign:                                                                              | The appId field.                                                                                |
| `displayName`                                                                                   | *string*                                                                                        | :heavy_minus_sign:                                                                              | The displayName field.                                                                          |
| `enabledKinds`                                                                                  | [shared.EdgeRollupItemEnabledKinds](../../../sdk/models/shared/edgerollupitemenabledkinds.md)[] | :heavy_minus_sign:                                                                              | The enabledKinds field.                                                                         |
| `id`                                                                                            | *string*                                                                                        | :heavy_minus_sign:                                                                              | The id field.                                                                                   |
| `mode`                                                                                          | [shared.EdgeRollupItemMode](../../../sdk/models/shared/edgerollupitemmode.md)                   | :heavy_minus_sign:                                                                              | The mode field.                                                                                 |