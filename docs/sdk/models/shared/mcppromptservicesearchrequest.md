# MCPPromptServiceSearchRequest

MCPPromptServiceSearchRequest searches stored, nondeleted prompts within one connector.

## Example Usage

```typescript
import { MCPPromptServiceSearchRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPPromptServiceSearchRequest = {};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `includeGrantStatus`                                                                                 | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | Populate entitlement_active and grant_count. Defaults to false.                                      |
| `pageSize`                                                                                           | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Maximum results per page, up to 100. Zero selects the default.                                       |
| `pageToken`                                                                                          | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Pagination token from a previous response.                                                           |
| `query`                                                                                              | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Literal text query matched against name, title and description.                                      |
| `sortBy`                                                                                             | [shared.SortBy](../../../sdk/models/shared/sortby.md)                                                | :heavy_minus_sign:                                                                                   | Primary sort field. UNSPECIFIED selects name ascending.                                              |
| `sortDirection`                                                                                      | [shared.SortDirection](../../../sdk/models/shared/sortdirection.md)                                  | :heavy_minus_sign:                                                                                   | Primary sort direction. UNSPECIFIED means ascending; sort_by UNSPECIFIED always uses name ascending. |
| `stateFilter`                                                                                        | [shared.StateFilter](../../../sdk/models/shared/statefilter.md)[]                                    | :heavy_minus_sign:                                                                                   | States to include. Empty selects PENDING_REVIEW, APPROVED and DISABLED; request REMOVED explicitly.  |