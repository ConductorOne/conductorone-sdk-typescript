# XAAScopeServiceSearchResponse

XAAScopeServiceSearchResponse returns matching scopes.

## Example Usage

```typescript
import { XAAScopeServiceSearchResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: XAAScopeServiceSearchResponse = {};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `list`                                                      | [shared.XAAScope](../../../sdk/models/shared/xaascope.md)[] | :heavy_minus_sign:                                          | Matching scopes.                                            |
| `nextPageToken`                                             | *string*                                                    | :heavy_minus_sign:                                          | Token for the next page.                                    |