# AnyRules

AnyRules describe constraints applied exclusively to the
 `google.protobuf.Any` well-known type

## Example Usage

```typescript
import { AnyRules } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AnyRules = {};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `in`                                                                                            | *string*[]                                                                                      | :heavy_minus_sign:                                                                              | In specifies that this field's `type_url` must be equal to one of the<br/> specified values.    |
| `notIn`                                                                                         | *string*[]                                                                                      | :heavy_minus_sign:                                                                              | NotIn specifies that this field's `type_url` must not be equal to any of<br/> the specified values. |
| `required`                                                                                      | *boolean*                                                                                       | :heavy_minus_sign:                                                                              | Required specifies that this field must be set                                                  |