# ArtifactServiceSearchRequest

ArtifactServiceSearchRequest searches only audience-visible catalog metadata.
 Consumers must deduplicate grant-derived candidates before pagination, strongly
 recheck canonical metadata and current grants before disclosure, and reject
 stale query-relevant observations. Order is created_at then id, both descending.
 Cursor validation must bind authenticated tenant/user, filters, ordering and
 last consumed boundary; these semantic checks are not generated validators.
 Candidate scanning must be bounded; rejected candidates still advance the
 consumed boundary, without exposing candidate or rejection counts.

## Example Usage

```typescript
import { ArtifactServiceSearchRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ArtifactServiceSearchRequest = {};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pageSize`                                                                                                                                               | *number*                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                       | Maximum number of results per page; zero selects the service default, 20.                                                                                |
| `pageToken`                                                                                                                                              | *string*                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                       | Sealed continuation token from a previous response with the same filters.                                                                                |
| `query`                                                                                                                                                  | *string*                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                       | Free-text query matched against current catalog display name and description.<br/> Empty means no text filter; source text and live data are never searched. |
| `tags`                                                                                                                                                   | *string*[]                                                                                                                                               | :heavy_minus_sign:                                                                                                                                       | Require all specified topic tags; empty means no tag filter.                                                                                             |