# FieldRules

FieldRules encapsulates the rules for each type of field. Depending on the
 field, the correct set should be used to ensure proper validations.

This message contains a oneof named type. Only a single field of the following list may be set at a time:
  - float
  - double
  - int32
  - int64
  - uint32
  - uint64
  - sint32
  - sint64
  - fixed32
  - fixed64
  - sfixed32
  - sfixed64
  - bool
  - string
  - bytes
  - enum
  - repeated
  - map
  - any
  - duration
  - timestamp


## Example Usage

```typescript
import { FieldRules } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FieldRules = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `any`                                                                 | [shared.AnyRules](../../../sdk/models/shared/anyrules.md)             | :heavy_minus_sign:                                                    | N/A                                                                   |
| `bool`                                                                | [shared.BoolRules](../../../sdk/models/shared/boolrules.md)           | :heavy_minus_sign:                                                    | N/A                                                                   |
| `bytes`                                                               | [shared.BytesRules](../../../sdk/models/shared/bytesrules.md)         | :heavy_minus_sign:                                                    | N/A                                                                   |
| `double`                                                              | [shared.DoubleRules](../../../sdk/models/shared/doublerules.md)       | :heavy_minus_sign:                                                    | N/A                                                                   |
| `duration`                                                            | [shared.DurationRules](../../../sdk/models/shared/durationrules.md)   | :heavy_minus_sign:                                                    | N/A                                                                   |
| `enum`                                                                | [shared.EnumRules](../../../sdk/models/shared/enumrules.md)           | :heavy_minus_sign:                                                    | N/A                                                                   |
| `fixed32`                                                             | [shared.Fixed32Rules](../../../sdk/models/shared/fixed32rules.md)     | :heavy_minus_sign:                                                    | N/A                                                                   |
| `fixed64`                                                             | [shared.Fixed64Rules](../../../sdk/models/shared/fixed64rules.md)     | :heavy_minus_sign:                                                    | N/A                                                                   |
| `float`                                                               | [shared.FloatRules](../../../sdk/models/shared/floatrules.md)         | :heavy_minus_sign:                                                    | N/A                                                                   |
| `int32`                                                               | [shared.Int32Rules](../../../sdk/models/shared/int32rules.md)         | :heavy_minus_sign:                                                    | N/A                                                                   |
| `int64`                                                               | [shared.Int64Rules](../../../sdk/models/shared/int64rules.md)         | :heavy_minus_sign:                                                    | N/A                                                                   |
| `map`                                                                 | [shared.MapRules](../../../sdk/models/shared/maprules.md)             | :heavy_minus_sign:                                                    | N/A                                                                   |
| `message`                                                             | [shared.MessageRules](../../../sdk/models/shared/messagerules.md)     | :heavy_minus_sign:                                                    | N/A                                                                   |
| `repeated`                                                            | [shared.RepeatedRules](../../../sdk/models/shared/repeatedrules.md)   | :heavy_minus_sign:                                                    | N/A                                                                   |
| `sfixed32`                                                            | [shared.SFixed32Rules](../../../sdk/models/shared/sfixed32rules.md)   | :heavy_minus_sign:                                                    | N/A                                                                   |
| `sfixed64`                                                            | [shared.SFixed64Rules](../../../sdk/models/shared/sfixed64rules.md)   | :heavy_minus_sign:                                                    | N/A                                                                   |
| `sint32`                                                              | [shared.SInt32Rules](../../../sdk/models/shared/sint32rules.md)       | :heavy_minus_sign:                                                    | N/A                                                                   |
| `sint64`                                                              | [shared.SInt64Rules](../../../sdk/models/shared/sint64rules.md)       | :heavy_minus_sign:                                                    | N/A                                                                   |
| `string`                                                              | [shared.StringRules](../../../sdk/models/shared/stringrules.md)       | :heavy_minus_sign:                                                    | N/A                                                                   |
| `timestamp`                                                           | [shared.TimestampRules](../../../sdk/models/shared/timestamprules.md) | :heavy_minus_sign:                                                    | N/A                                                                   |
| `uint32`                                                              | [shared.UInt32Rules](../../../sdk/models/shared/uint32rules.md)       | :heavy_minus_sign:                                                    | N/A                                                                   |
| `uint64`                                                              | [shared.UInt64Rules](../../../sdk/models/shared/uint64rules.md)       | :heavy_minus_sign:                                                    | N/A                                                                   |