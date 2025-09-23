# StringSliceField

The StringSliceField message.

This message contains a oneof named view. Only a single field of the following list may be set at a time:
  - chipsField


This message contains a oneof named _rules. Only a single field of the following list may be set at a time:
  - rules


## Example Usage

```typescript
import { StringSliceField } from "conductorone-sdk-typescript/sdk/models/shared";

let value: StringSliceField = {};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `chipsField`                                                        | [shared.ChipsField](../../../sdk/models/shared/chipsfield.md)       | :heavy_minus_sign:                                                  | N/A                                                                 |
| `defaultValues`                                                     | *string*[]                                                          | :heavy_minus_sign:                                                  | The defaultValues field.                                            |
| `placeholder`                                                       | *string*                                                            | :heavy_minus_sign:                                                  | The placeholder field.                                              |
| `rules`                                                             | [shared.RepeatedRules](../../../sdk/models/shared/repeatedrules.md) | :heavy_minus_sign:                                                  | N/A                                                                 |