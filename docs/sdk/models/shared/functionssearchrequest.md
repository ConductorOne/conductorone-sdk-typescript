# FunctionsSearchRequest

The FunctionsSearchRequest message.

## Example Usage

```typescript
import { FunctionsSearchRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FunctionsSearchRequest = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `functionTypes`                                                       | [shared.FunctionTypes](../../../sdk/models/shared/functiontypes.md)[] | :heavy_minus_sign:                                                    | The functionTypes field.                                              |
| `pageSize`                                                            | *number*                                                              | :heavy_minus_sign:                                                    | The pageSize field.                                                   |
| `pageToken`                                                           | *string*                                                              | :heavy_minus_sign:                                                    | The pageToken field.                                                  |
| `query`                                                               | *string*                                                              | :heavy_minus_sign:                                                    | The query field.                                                      |