# HookFunctionRef

HookFunctionRef identifies a customer-authored function to invoke.

## Example Usage

```typescript
import { HookFunctionRef } from "conductorone-sdk-typescript/sdk/models/shared";

let value: HookFunctionRef = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `commitId`                                                            | *string*                                                              | :heavy_minus_sign:                                                    | If empty, the function's published commit is used at invocation time. |
| `functionId`                                                          | *string*                                                              | :heavy_minus_sign:                                                    | The functionId field.                                                 |