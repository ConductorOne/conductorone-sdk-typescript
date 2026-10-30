# ToolGateSpec

ToolGateSpec is the instantiable body of a tool gate inside a template.

## Example Usage

```typescript
import { ToolGateSpec } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ToolGateSpec = {};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `builtInPattern`                                                                                     | [shared.ToolGateSpecBuiltInPattern](../../../sdk/models/shared/toolgatespecbuiltinpattern.md)        | :heavy_minus_sign:                                                                                   | Built-in pattern selector; when set, cel_expression is resolved from the<br/> registry at instantiation. |
| `celExpression`                                                                                      | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The celExpression field.                                                                             |
| `description`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The description field.                                                                               |
| `displayName`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The displayName field.                                                                               |
| `enabled`                                                                                            | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | The enabled field.                                                                                   |
| `grantPolicyParamKey`                                                                                | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The grantPolicyParamKey field.                                                                       |
| `key`                                                                                                | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The key field.                                                                                       |
| `priority`                                                                                           | *number*                                                                                             | :heavy_minus_sign:                                                                                   | The priority field.                                                                                  |