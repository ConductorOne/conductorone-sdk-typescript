# EnumValue

EnumValue is one declared variant of a proto enum.

## Example Usage

```typescript
import { EnumValue } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EnumValue = {};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                   | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | Full proto enum value name (e.g. "POLICY_TYPE_GRANT"). The<br/> conductorone provider accepts this verbatim as a quoted-string HCL<br/> literal. |
| `number`                                                                                                                                 | *number*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | Proto enum number — the value on the wire (e.g. 1 for<br/> POLICY_TYPE_GRANT).                                                           |