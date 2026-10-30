# XAAClientAudienceMappingServiceSearchRequest

XAAClientAudienceMappingServiceSearchRequest searches mappings with filters.

## Example Usage

```typescript
import { XAAClientAudienceMappingServiceSearchRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: XAAClientAudienceMappingServiceSearchRequest = {};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `disabled`                                                                                                 | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | Optional filter by disabled state.                                                                         |
| `pageSize`                                                                                                 | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | Page size (max 100).                                                                                       |
| `pageToken`                                                                                                | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Page token for pagination.                                                                                 |
| `query`                                                                                                    | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Optional text query matched against client_key and audience_client_id.                                     |
| `refs`                                                                                                     | [shared.XAAClientAudienceMappingRef](../../../sdk/models/shared/xaaclientaudiencemappingref.md)[]          | :heavy_minus_sign:                                                                                         | Optional: fetch a specific set of mappings by ref (used by websocket<br/> notify to re-fetch individual rows). |
| `xaaResourceServerIds`                                                                                     | *string*[]                                                                                                 | :heavy_minus_sign:                                                                                         | Optional filter by resource servers. Empty matches any resource server.                                    |