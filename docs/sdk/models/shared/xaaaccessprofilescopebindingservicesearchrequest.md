# XAAAccessProfileScopeBindingServiceSearchRequest

XAAAccessProfileScopeBindingServiceSearchRequest searches scope bindings.

## Example Usage

```typescript
import { XAAAccessProfileScopeBindingServiceSearchRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: XAAAccessProfileScopeBindingServiceSearchRequest = {};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `accessProfileIds`                                                                                         | *string*[]                                                                                                 | :heavy_minus_sign:                                                                                         | Optional filter by access profiles. Empty matches any access profile.                                      |
| `appId`                                                                                                    | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The application that owns the resource server (required).                                                  |
| `pageSize`                                                                                                 | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | Page size (max 100).                                                                                       |
| `pageToken`                                                                                                | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Page token for pagination.                                                                                 |
| `refs`                                                                                                     | [shared.XAAAccessProfileScopeBindingRef](../../../sdk/models/shared/xaaaccessprofilescopebindingref.md)[]  | :heavy_minus_sign:                                                                                         | Optional: fetch a specific set of bindings by ref (used by websocket<br/> notify to re-fetch individual rows). |
| `xaaScopeIds`                                                                                              | *string*[]                                                                                                 | :heavy_minus_sign:                                                                                         | Optional filter by scopes (impact analysis: which profiles contain a<br/> scope). Empty matches any scope. |