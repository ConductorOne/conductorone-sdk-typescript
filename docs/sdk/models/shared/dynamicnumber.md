# DynamicNumber

DynamicNumber can be a literal value, a JSON pointer path, or a function call.

This message contains a oneof named value. Only a single field of the following list may be set at a time:
  - literal
  - path
  - call


## Example Usage

```typescript
import { DynamicNumber } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DynamicNumber = {};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `functionCall`                                                                                                                         | [shared.FunctionCall](../../../sdk/models/shared/functioncall.md)                                                                      | :heavy_minus_sign:                                                                                                                     | FunctionCall represents a client-side function invocation.                                                                             |
| `literal`                                                                                                                              | *number*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | The literal field.<br/>This field is part of the `value` oneof.<br/>See the documentation for `c1.api.a2ui.v1.DynamicNumber` for more details. |
| `path`                                                                                                                                 | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | The path field.<br/>This field is part of the `value` oneof.<br/>See the documentation for `c1.api.a2ui.v1.DynamicNumber` for more details. |