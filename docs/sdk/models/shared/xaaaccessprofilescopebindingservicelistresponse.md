# XAAAccessProfileScopeBindingServiceListResponse

XAAAccessProfileScopeBindingServiceListResponse returns scope bindings.

## Example Usage

```typescript
import { XAAAccessProfileScopeBindingServiceListResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: XAAAccessProfileScopeBindingServiceListResponse = {};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `bindings`                                                                                          | [shared.XAAAccessProfileScopeBinding](../../../sdk/models/shared/xaaaccessprofilescopebinding.md)[] | :heavy_minus_sign:                                                                                  | The page of scope bindings.                                                                         |
| `nextPageToken`                                                                                     | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Token for the next page, or empty if there are no more results.                                     |