# C1TodoItem

The C1TodoItem message.

## Example Usage

```typescript
import { C1TodoItem } from "conductorone-sdk-typescript/sdk/models/shared";

let value: C1TodoItem = {};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `description`                                                       | [shared.DynamicString](../../../sdk/models/shared/dynamicstring.md) | :heavy_minus_sign:                                                  | N/A                                                                 |
| `id`                                                                | *string*                                                            | :heavy_minus_sign:                                                  | The id field.                                                       |
| `label`                                                             | [shared.DynamicString](../../../sdk/models/shared/dynamicstring.md) | :heavy_minus_sign:                                                  | N/A                                                                 |
| `section`                                                           | *string*                                                            | :heavy_minus_sign:                                                  | The section field.                                                  |
| `status`                                                            | *string*                                                            | :heavy_minus_sign:                                                  | The status field.                                                   |
| `trailingAction`                                                    | [shared.ServerEvent](../../../sdk/models/shared/serverevent.md)     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `trailingActionLabel`                                               | [shared.DynamicString](../../../sdk/models/shared/dynamicstring.md) | :heavy_minus_sign:                                                  | N/A                                                                 |