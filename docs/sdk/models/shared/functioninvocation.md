# FunctionInvocation

The FunctionInvocation message.

## Example Usage

```typescript
import { FunctionInvocation } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FunctionInvocation = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `commitId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The commitId field.                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | The error field.                                                                              |
| `functionId`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | The functionId field.                                                                         |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The id field.                                                                                 |
| `input`                                                                                       | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `output`                                                                                      | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [shared.FunctionInvocationStatus](../../../sdk/models/shared/functioninvocationstatus.md)     | :heavy_minus_sign:                                                                            | The status field.                                                                             |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |