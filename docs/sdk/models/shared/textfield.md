# TextField

The TextField message.

This message contains a oneof named _suffix. Only a single field of the following list may be set at a time:
  - suffix


## Example Usage

```typescript
import { TextField } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TextField = {};
```

## Fields

| Field                                                                                                                                                                                                | Type                                                                                                                                                                                                 | Required                                                                                                                                                                                             | Description                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `multiline`                                                                                                                                                                                          | *boolean*                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                   | The multiline field.                                                                                                                                                                                 |
| `suffix`                                                                                                                                                                                             | *string*                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                   | Static text displayed as an end adornment (e.g. ".example.com" for domain fields).<br/>This field is part of the `_suffix` oneof.<br/>See the documentation for `c1.api.form.v1.TextField` for more details. |