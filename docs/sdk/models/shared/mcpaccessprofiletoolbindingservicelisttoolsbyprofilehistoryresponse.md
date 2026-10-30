# MCPAccessProfileToolBindingServiceListToolsByProfileHistoryResponse

Contains a page of change-history entries for the tools bound to one toolset
 sorted newest first.

## Example Usage

```typescript
import { MCPAccessProfileToolBindingServiceListToolsByProfileHistoryResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPAccessProfileToolBindingServiceListToolsByProfileHistoryResponse =
  {};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `list`                                                                                                                    | [shared.MCPAccessProfileToolBindingHistoryEntry](../../../sdk/models/shared/mcpaccessprofiletoolbindinghistoryentry.md)[] | :heavy_minus_sign:                                                                                                        | The page of history entries, newest first.                                                                                |
| `nextPageToken`                                                                                                           | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | Pagination token for the next page, or empty if there are no more results.                                                |