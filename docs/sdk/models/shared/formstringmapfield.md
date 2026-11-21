# FormStringMapField

The StringMapField message.

## Example Usage

```typescript
import { FormStringMapField } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FormStringMapField = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `defaultValue`                                                                       | Record<string, *string*>                                                             | :heavy_minus_sign:                                                                   | The defaultValue field.                                                              |
| `rules`                                                                              | [shared.StringMapRules](../../../sdk/models/shared/stringmaprules.md)                | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `secret`                                                                             | *boolean*                                                                            | :heavy_minus_sign:                                                                   | If secret, the map's values are write-only and rendered masked. Keys stay<br/> readable. |