# ListAppManagedStateBindingsResponse

ListAppManagedStateBindingsResponse contains one page of discovered application managed states.

## Example Usage

```typescript
import { ListAppManagedStateBindingsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ListAppManagedStateBindingsResponse = {};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `expanded`                                                                                                                        | [shared.ListAppManagedStateBindingsResponseExpanded](../../../sdk/models/shared/listappmanagedstatebindingsresponseexpanded.md)[] | :heavy_minus_sign:                                                                                                                | Related objects included for gRPC requests that set expand_mask.                                                                  |
| `list`                                                                                                                            | [shared.AppManagedStateBindingView](../../../sdk/models/shared/appmanagedstatebindingview.md)[]                                   | :heavy_minus_sign:                                                                                                                | Managed states of the discovered applications.                                                                                    |
| `nextPageToken`                                                                                                                   | *string*                                                                                                                          | :heavy_minus_sign:                                                                                                                | Pagination token for the next page. Empty when there are no more results.                                                         |