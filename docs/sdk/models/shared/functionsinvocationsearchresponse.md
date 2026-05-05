# FunctionsInvocationSearchResponse

FunctionsInvocationSearchResponse is the response for searching function invocations.

## Example Usage

```typescript
import { FunctionsInvocationSearchResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FunctionsInvocationSearchResponse = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `list`                                                                          | [shared.FunctionInvocation](../../../sdk/models/shared/functioninvocation.md)[] | :heavy_minus_sign:                                                              | The list of function invocations, ordered by created_at descending.             |
| `nextPageToken`                                                                 | *string*                                                                        | :heavy_minus_sign:                                                              | The pagination token for fetching the next page.                                |