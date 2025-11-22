# FunctionsInvocationServiceListResponse

The FunctionsInvocationServiceListResponse message.

## Example Usage

```typescript
import { FunctionsInvocationServiceListResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FunctionsInvocationServiceListResponse = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `list`                                                                          | [shared.FunctionInvocation](../../../sdk/models/shared/functioninvocation.md)[] | :heavy_minus_sign:                                                              | The list field.                                                                 |
| `nextPageToken`                                                                 | *string*                                                                        | :heavy_minus_sign:                                                              | The nextPageToken field.                                                        |