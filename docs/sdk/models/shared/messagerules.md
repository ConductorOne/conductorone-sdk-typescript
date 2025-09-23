# MessageRules

MessageRules describe the constraints applied to embedded message values.
 For message-type fields, validation is performed recursively.

## Example Usage

```typescript
import { MessageRules } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MessageRules = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `required`                                                                      | *boolean*                                                                       | :heavy_minus_sign:                                                              | Required specifies that this field must be set                                  |
| `skip`                                                                          | *boolean*                                                                       | :heavy_minus_sign:                                                              | Skip specifies that the validation rules of this field should not be<br/> evaluated |