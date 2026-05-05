# FunctionsInvocationSearchRequest

FunctionsInvocationSearchRequest is the request for searching function invocations.
 Results are returned in descending order by created_at (newest first).

## Example Usage

```typescript
import { FunctionsInvocationSearchRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FunctionsInvocationSearchRequest = {};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `pageSize`                                       | *number*                                         | :heavy_minus_sign:                               | The number of results to return per page.        |
| `pageToken`                                      | *string*                                         | :heavy_minus_sign:                               | The pagination token for fetching the next page. |