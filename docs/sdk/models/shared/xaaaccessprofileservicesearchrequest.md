# XAAAccessProfileServiceSearchRequest

XAAAccessProfileServiceSearchRequest searches access profiles with filters.

## Example Usage

```typescript
import { XAAAccessProfileServiceSearchRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: XAAAccessProfileServiceSearchRequest = {};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `appIds`                                                                                                          | *string*[]                                                                                                        | :heavy_minus_sign:                                                                                                | Optional filter by applications. Empty matches any application.                                                   |
| `pageSize`                                                                                                        | *number*                                                                                                          | :heavy_minus_sign:                                                                                                | Page size (max 100).                                                                                              |
| `pageToken`                                                                                                       | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | Page token for pagination.                                                                                        |
| `query`                                                                                                           | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | Optional text query matched against display_name.                                                                 |
| `refs`                                                                                                            | [shared.XAAAccessProfileRef](../../../sdk/models/shared/xaaaccessprofileref.md)[]                                 | :heavy_minus_sign:                                                                                                | Optional: fetch a specific set of access profiles by ref (used by<br/> websocket notify to re-fetch individual rows). |
| `xaaResourceServerIds`                                                                                            | *string*[]                                                                                                        | :heavy_minus_sign:                                                                                                | Optional filter by resource servers. Empty matches any resource server.                                           |