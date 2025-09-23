# DurationRules

DurationRules describe the constraints applied exclusively to the
 `google.protobuf.Duration` well-known type

## Example Usage

```typescript
import { DurationRules } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DurationRules = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `const`                                                                         | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `gt`                                                                            | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `gte`                                                                           | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `in`                                                                            | *string*[]                                                                      | :heavy_minus_sign:                                                              | In specifies that this field must be equal to one of the specified<br/> values  |
| `lt`                                                                            | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `lte`                                                                           | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `notIn`                                                                         | *string*[]                                                                      | :heavy_minus_sign:                                                              | NotIn specifies that this field cannot be equal to one of the specified<br/> values |
| `required`                                                                      | *boolean*                                                                       | :heavy_minus_sign:                                                              | Required specifies that this field must be set                                  |