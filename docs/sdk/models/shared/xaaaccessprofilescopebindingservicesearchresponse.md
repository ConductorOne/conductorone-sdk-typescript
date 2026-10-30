# XAAAccessProfileScopeBindingServiceSearchResponse

XAAAccessProfileScopeBindingServiceSearchResponse returns matching bindings.

## Example Usage

```typescript
import { XAAAccessProfileScopeBindingServiceSearchResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: XAAAccessProfileScopeBindingServiceSearchResponse = {};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `list`                                                                                              | [shared.XAAAccessProfileScopeBinding](../../../sdk/models/shared/xaaaccessprofilescopebinding.md)[] | :heavy_minus_sign:                                                                                  | Matching scope bindings.                                                                            |
| `nextPageToken`                                                                                     | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Token for the next page.                                                                            |