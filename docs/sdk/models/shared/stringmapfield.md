# StringMapField

The StringMapField message.

This message contains a oneof named _rules. Only a single field of the following list may be set at a time:
  - rules


## Example Usage

```typescript
import { StringMapField } from "conductorone-sdk-typescript/sdk/models/shared";

let value: StringMapField = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `defaultValue`                                                        | Record<string, *string*>                                              | :heavy_minus_sign:                                                    | The defaultValue field.                                               |
| `stringMapRules`                                                      | [shared.StringMapRules](../../../sdk/models/shared/stringmaprules.md) | :heavy_minus_sign:                                                    | The StringMapRules message.                                           |