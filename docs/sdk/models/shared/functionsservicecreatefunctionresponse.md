# FunctionsServiceCreateFunctionResponse

The FunctionsServiceCreateFunctionResponse message.

## Example Usage

```typescript
import { FunctionsServiceCreateFunctionResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FunctionsServiceCreateFunctionResponse = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `functionCommit`                                                      | [shared.FunctionCommit](../../../sdk/models/shared/functioncommit.md) | :heavy_minus_sign:                                                    | FunctionCommit represents a single commit in a function's history     |
| `function`                                                            | [shared.FunctionT](../../../sdk/models/shared/functiont.md)           | :heavy_minus_sign:                                                    | Function represents a customer-provided code extension in the API     |