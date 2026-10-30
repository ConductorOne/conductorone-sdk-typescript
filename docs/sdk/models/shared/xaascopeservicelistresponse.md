# XAAScopeServiceListResponse

XAAScopeServiceListResponse returns a page of scopes.

## Example Usage

```typescript
import { XAAScopeServiceListResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: XAAScopeServiceListResponse = {};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `nextPageToken`                                                 | *string*                                                        | :heavy_minus_sign:                                              | Token for the next page, or empty if there are no more results. |
| `scopes`                                                        | [shared.XAAScope](../../../sdk/models/shared/xaascope.md)[]     | :heavy_minus_sign:                                              | The page of scopes.                                             |