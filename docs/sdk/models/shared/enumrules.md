# EnumRules

EnumRules describe the constraints applied to enum values

## Example Usage

```typescript
import { EnumRules } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EnumRules = {};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `const`                                                                                                                      | *number*                                                                                                                     | :heavy_minus_sign:                                                                                                           | Const specifies that this field must be exactly the specified value                                                          |
| `definedOnly`                                                                                                                | *boolean*                                                                                                                    | :heavy_minus_sign:                                                                                                           | DefinedOnly specifies that this field must be only one of the defined<br/> values for this enum, failing on any undefined value. |
| `in`                                                                                                                         | *number*[]                                                                                                                   | :heavy_minus_sign:                                                                                                           | In specifies that this field must be equal to one of the specified<br/> values                                               |
| `notIn`                                                                                                                      | *number*[]                                                                                                                   | :heavy_minus_sign:                                                                                                           | NotIn specifies that this field cannot be equal to one of the specified<br/> values                                          |