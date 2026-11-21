# StringMapField

The StringMapField message.

## Example Usage

```typescript
import { StringMapField } from "conductorone-sdk-typescript/sdk/models/shared";

let value: StringMapField = {};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `optional`                                                                                           | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | The optional field.                                                                                  |
| `secret`                                                                                             | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | If secret, the map's values are write-only in the UI and a masked form is<br/> used. Keys stay readable. |